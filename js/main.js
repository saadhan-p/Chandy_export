/* ==========================================================================
   Chandy's Global Exports - Main Application Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initRfqDrawer();
  initProductFilter();
  initFreightCalculator();
  initToastManager();
});

/* Navigation & Mobile Toggle */
function initNavigation() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const isOpen = navMenu.classList.contains('active');
      mobileToggle.innerHTML = isOpen ? '✕' : '☰';
    });
  }
}

/* Slide-Over B2B RFQ Drawer */
function initRfqDrawer() {
  const drawerBackdrop = document.getElementById('rfqDrawerBackdrop');
  const openButtons = document.querySelectorAll('[data-open-rfq]');
  const closeButton = document.getElementById('rfqDrawerClose');
  const rfqForm = document.getElementById('rfqDrawerForm');

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const productPreselect = btn.getAttribute('data-product') || '';
      if (productPreselect && document.getElementById('drawerCategorySelect')) {
        document.getElementById('drawerCategorySelect').value = productPreselect;
      }
      openDrawer();
    });
  });

  if (closeButton) {
    closeButton.addEventListener('click', closeDrawer);
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', (e) => {
      if (e.target === drawerBackdrop) {
        closeDrawer();
      }
    });
  }

  if (rfqForm) {
    rfqForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('RFQ Submitted Successfully! An Export Specialist will contact you within 4 hours with your FOB quote.');
      closeDrawer();
      rfqForm.reset();
    });
  }

  function openDrawer() {
    if (drawerBackdrop) {
      drawerBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (drawerBackdrop) {
      drawerBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
}

/* Product Category Filter */
function initProductFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-item');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active', 'btn-primary'));
      filterBtns.forEach(b => b.classList.add('btn-outline'));
      
      btn.classList.add('active', 'btn-primary');
      btn.classList.remove('btn-outline');

      const filterCategory = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        if (filterCategory === 'all' || card.getAttribute('data-category') === filterCategory) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* Freight & FOB Calculator */
function initFreightCalculator() {
  const calcForm = document.getElementById('freightCalcForm');
  const calcResult = document.getElementById('calcResult');

  if (!calcForm || !calcResult) return;

  calcForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const commodity = document.getElementById('calcCommodity').value;
    const volume = parseFloat(document.getElementById('calcVolume').value) || 10;
    const destination = document.getElementById('calcDestination').value;

    let baseRatePerTon = 1200; // USD default base freight & handling
    if (commodity === 'tonewood') baseRatePerTon = 2800;
    if (commodity === 'coffee') baseRatePerTon = 1450;
    if (commodity === 'veneer') baseRatePerTon = 1900;

    let destMultiplier = 1.0;
    if (destination === 'eu') destMultiplier = 1.25;
    if (destination === 'us') destMultiplier = 1.40;
    if (destination === 'jp') destMultiplier = 1.35;
    if (destination === 'uae') destMultiplier = 1.10;

    const estimatedTotal = Math.round(baseRatePerTon * volume * destMultiplier);
    const estimatedFob = Math.round((baseRatePerTon * 0.75) * volume);
    const estimatedTransitDays = destination === 'uae' ? 7 : destination === 'eu' ? 18 : 24;

    calcResult.innerHTML = `
      <div style="background: var(--color-light-azure); border-left: 4px solid var(--color-accent-cyan); padding: 1.25rem; border-radius: var(--radius-sm);">
        <h4 style="color: var(--color-dark-navy); margin-bottom: 0.5rem;">Estimated Logistics & FOB Preview</h4>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 1rem; text-align: center;">
          <div>
            <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--color-muted-text);">Estimated FOB Port Price</div>
            <div style="font-family: var(--font-headline); font-size: 1.5rem; font-weight: 700; color: var(--color-primary-navy);">$${estimatedFob.toLocaleString()} USD</div>
          </div>
          <div>
            <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--color-muted-text);">Estimated CIF Delivered</div>
            <div style="font-family: var(--font-headline); font-size: 1.5rem; font-weight: 700; color: var(--color-accent-cyan);">$${estimatedTotal.toLocaleString()} USD</div>
          </div>
          <div>
            <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--color-muted-text);">Est. Transit Time</div>
            <div style="font-family: var(--font-headline); font-size: 1.5rem; font-weight: 700; color: var(--color-dark-navy);">${estimatedTransitDays} Days</div>
          </div>
        </div>
        <p style="font-size: 0.775rem; color: var(--color-muted-text); margin-top: 1rem; margin-bottom: 0;">*Estimates subject to container load availability and phytosanitary inspection clearance. Contact our export desk for binding tariff quotes.</p>
      </div>
    `;
  });
}

/* Toast Notification Manager */
function initToastManager() {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  window.showToast = function(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <div style="width: 10px; height: 10px; background: var(--color-accent-cyan); border-radius: 50%;"></div>
      <div style="font-size: 0.875rem; flex-grow: 1;">${message}</div>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  };
}
