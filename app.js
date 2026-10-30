(() => {
  'use strict';

  function initializeNavigation() {
    const toggle = document.getElementById('nav-toggle');
    const navigation = document.getElementById('main-nav');
    if (!toggle || !navigation) return;

    function setOpen(open, returnFocus = false) {
      toggle.setAttribute('aria-expanded', String(open));
      navigation.classList.toggle('is-open', open);
      if (returnFocus) toggle.focus({ preventScroll: true });
    }

    toggle.addEventListener('click', () => {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    navigation.addEventListener('click', (event) => {
      if (event.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false, true);
      }
    });
    document.addEventListener('click', (event) => {
      if (!navigation.contains(event.target) && !toggle.contains(event.target)) {
        setOpen(false);
      }
    });
    const desktop = window.matchMedia('(min-width: 1101px)');
    desktop.addEventListener('change', (event) => {
      if (event.matches) setOpen(false);
    });
  }

  function initializeMobileTickets() {
    const layout = document.querySelector('.ticket-information-layout');
    const map = layout?.querySelector('.seating-plan');
    const prices = layout?.querySelector('.ticket-information-copy');
    if (!map || !prices) return;
    const phone = window.matchMedia('(max-width: 767px)');
    function reorder() {
      if (phone.matches) layout.insertBefore(map, prices);
      else layout.append(map);
    }
    reorder();
    phone.addEventListener('change', reorder);
  }

  function initializeMasonry() {
    const grid = document.getElementById('christmas-gallery');
    if (!grid) return;
    grid.classList.add('is-masonry');
    function layout() {
      const style = getComputedStyle(grid);
      const row = parseFloat(style.gridAutoRows);
      const gap = parseFloat(style.rowGap);
      grid.querySelectorAll('.gallery-item').forEach(item => {
        if (item.hidden) return;
        const img = item.querySelector('img');
        const height = item.getBoundingClientRect().width * Number(img.getAttribute('height')) / Number(img.getAttribute('width'));
        item.style.gridRowEnd = `span ${Math.ceil((height + gap) / (row + gap))}`;
      });
    }
    let previousWidth = -1;
    new ResizeObserver(entries => {
      const width = entries[0].contentRect.width;
      if (width !== previousWidth) { previousWidth = width; layout(); }
    }).observe(grid);
    grid.addEventListener('gallery:layout', layout);
    layout();
  }

  function initializeGallery() {
    const items = Array.from(document.querySelectorAll('[data-gallery-src]'));
    const dialog = document.getElementById('gallery-dialog');
    const picture = document.getElementById('gallery-image');
    const caption = document.getElementById('gallery-caption');
    const close = document.getElementById('gallery-close');
    const previous = document.getElementById('gallery-prev');
    const next = document.getElementById('gallery-next');
    if (!items.length || !dialog || !picture || !close) return;

    let activeIndex = 0;
    let opener = null;
    let previousOverflow = '';

    function display(index) {
      activeIndex = (index + items.length) % items.length;
      const item = items[activeIndex];
      picture.hidden = false;
      picture.alt = item.dataset.galleryAlt || 'Khoảnh khắc cùng Orchestars';
      picture.src = item.dataset.gallerySrc;
      if (caption) caption.textContent = (item.dataset.galleryCaption || picture.alt) + (item.dataset.gallerySrc.endsWith('.svg') && window.innerWidth < 768 ? '. Vuốt ngang trên sơ đồ để xem toàn bộ.' : '');
      if (previous) previous.disabled = items.length < 2;
      if (next) next.disabled = items.length < 2;
    }

    function closeGallery() {
      if (dialog.open) dialog.close();
    }

    items.forEach((item, index) => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        if (typeof dialog.showModal !== 'function') {
          window.open(item.dataset.gallerySrc, '_blank', 'noopener,noreferrer');
          return;
        }
        opener = item;
        display(index);
        if (!dialog.open) {
          previousOverflow = document.body.style.overflow;
          dialog.showModal();
          document.body.style.overflow = 'hidden';
        }
        close.focus({ preventScroll: true });
      });
    });

    close.addEventListener('click', closeGallery);
    previous?.addEventListener('click', () => display(activeIndex - 1));
    next?.addEventListener('click', () => display(activeIndex + 1));
    dialog.addEventListener('cancel', (event) => {
      event.preventDefault();
      closeGallery();
    });
    dialog.addEventListener('close', () => {
      document.body.style.overflow = previousOverflow;
      if (opener?.isConnected) opener.focus({ preventScroll: true });
    });
    dialog.addEventListener('click', (event) => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right
        || event.clientY < bounds.top || event.clientY > bounds.bottom) closeGallery();
    });
    dialog.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        display(activeIndex + (event.key === 'ArrowLeft' ? -1 : 1));
      }
    });
    picture.addEventListener('error', () => {
      picture.hidden = true;
      if (caption) caption.textContent = 'Không tải được ảnh. Bạn có thể chuyển sang ảnh tiếp theo hoặc đóng cửa sổ này.';
    });
  }

  function initializeShare() {
    const button = document.getElementById('share-button');
    const status = document.getElementById('share-status');
    if (!button || !status) return;

    button.addEventListener('click', async () => {
      const url = `${window.location.origin}${window.location.pathname}`;
      button.disabled = true;
      try {
        if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(url);
        status.textContent = 'Đã sao chép liên kết trang.';
      } catch {
        const link = document.createElement('a');
        link.href = url;
        link.textContent = url;
        status.replaceChildren(document.createTextNode('Sao chép liên kết này: '), link);
      } finally {
        button.disabled = false;
      }
    });
  }

  function initialize() {
    initializeNavigation();
    initializeMobileTickets();
    initializeMasonry();
    initializeGallery();
    initializeShare();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  } else {
    initialize();
  }
})();
