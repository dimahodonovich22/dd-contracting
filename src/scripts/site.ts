/**
 * DD Contracting — interacties voor de homepage.
 * Alle inhoud is zonder JavaScript bereikbaar; dit script voegt enkel comfort toe.
 */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const scrollBehavior = (): ScrollBehavior => (reduceMotion.matches ? 'auto' : 'smooth');

/* ---------- Uitschuifmenu ---------- */
function initMenu() {
  const menu = document.querySelector<HTMLElement>('[data-menu]');
  const panel = menu?.querySelector<HTMLElement>('[data-menu-panel]');
  const openBtn = document.querySelector<HTMLButtonElement>('[data-menu-open]');
  if (!menu || !panel || !openBtn) return;

  let lastFocus: HTMLElement | null = null;
  let hideTimer = 0;
  const focusables = () =>
    Array.from(panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')).filter(
      (el) => el.offsetParent !== null,
    );

  const open = () => {
    window.clearTimeout(hideTimer);
    lastFocus = document.activeElement as HTMLElement | null;
    menu.hidden = false;
    document.documentElement.style.overflow = 'hidden';
    openBtn.setAttribute('aria-expanded', 'true');
    requestAnimationFrame(() => {
      menu.classList.add('is-open');
      focusables()[0]?.focus({ preventScroll: true });
    });
  };

  const close = (restoreFocus = true) => {
    if (menu.hidden) return;
    menu.classList.remove('is-open');
    openBtn.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = '';
    const finish = () => {
      menu.hidden = true;
    };
    if (reduceMotion.matches) finish();
    else hideTimer = window.setTimeout(finish, 450);
    if (restoreFocus) lastFocus?.focus({ preventScroll: true });
  };

  openBtn.addEventListener('click', open);
  menu.querySelectorAll('[data-menu-close]').forEach((el) => el.addEventListener('click', () => close()));
  menu.querySelectorAll('[data-menu-link]').forEach((el) => el.addEventListener('click', () => close(false)));

  document.addEventListener('keydown', (e) => {
    if (menu.hidden) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
      return;
    }
    if (e.key === 'Tab') {
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  window.matchMedia('(min-width: 64rem)').addEventListener('change', (e) => {
    if (e.matches) close(false);
  });
}

/* ---------- Header: donkere balk na het scrollen ---------- */
function initHeader() {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (!header) return;
  const update = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

/* ---------- Vakgebieden: raster op desktop (altijd open), accordeon op mobiel ---------- */
function initServicesLinks() {
  const panel = document.querySelector<HTMLElement>('[data-all-services]');
  if (!panel) return;
  const areas = Array.from(panel.querySelectorAll<HTMLDetailsElement>('[data-area]'));
  const desktop = window.matchMedia('(min-width: 64rem)');

  const applyMode = () => {
    areas.forEach((d) => {
      const summary = d.querySelector('summary');
      d.open = desktop.matches;
      if (desktop.matches) summary?.setAttribute('tabindex', '-1');
      else summary?.removeAttribute('tabindex');
    });
  };
  applyMode();
  desktop.addEventListener('change', applyMode);
  areas.forEach((d) =>
    d.addEventListener('toggle', () => {
      if (desktop.matches && !d.open) d.open = true;
    }),
  );

  const reveal = (hash: string) => {
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (!target || !panel.contains(target)) return null;
    if (target instanceof HTMLDetailsElement) target.open = true;
    return target;
  };

  document.querySelectorAll<HTMLAnchorElement>('[data-open-services]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const hash = link.getAttribute('href') ?? '';
      const target = reveal(hash);
      if (!target) return;
      e.preventDefault();
      // Wacht tot het menu gesloten is en de inhoud zichtbaar is.
      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
        history.replaceState(null, '', hash);
      });
    });
  });

  // Rechtstreekse link naar een vakgebied (bv. gedeelde URL)
  if (location.hash && reveal(location.hash)) {
    requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView());
  }
}

/* ---------- Actieve sectie in de navigatie ---------- */
function initActiveNav() {
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]'));
  const sections = links
    .map((l) => document.querySelector<HTMLElement>(l.getAttribute('href') ?? ''))
    .filter((s): s is HTMLElement => Boolean(s));
  if (!sections.length || !('IntersectionObserver' in window)) return;

  const visible = new Set<string>();
  const update = () => {
    // De laatst zichtbare sectie in documentvolgorde wint; geen enkele zichtbaar = niets actief.
    const current = [...sections].reverse().find((s) => visible.has(s.id))?.id ?? null;
    links.forEach((l) => {
      if (current && l.getAttribute('href') === `#${current}`) l.setAttribute('aria-current', 'true');
      else l.removeAttribute('aria-current');
    });
  };

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visible.add(entry.target.id);
        else visible.delete(entry.target.id);
      });
      update();
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  sections.forEach((s) => io.observe(s));
}

/* ---------- Contactformulier (demo: valideert, verstuurt niets) ---------- */
type Rule = (value: string, field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => string | null;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const rules: Record<string, Rule> = {
  naam: (v) => (v.trim().length < 2 ? 'Please enter your name.' : null),
  email: (v) => {
    if (!v.trim()) return 'Please enter your email address.';
    return EMAIL_RE.test(v.trim()) ? null : "This email address doesn't look right. Please check it.";
  },
  telefoon: (v) => {
    if (!v.trim()) return 'Please enter your phone number.';
    const digits = v.replace(/\D/g, '');
    const allowed = /^[+\d\s().\/-]+$/.test(v.trim());
    return allowed && digits.length >= 9 && digits.length <= 15
      ? null
      : 'Please enter a valid phone number, including the country code (for example +32 4xx xx xx xx).';
  },
  dienst: (v) => (v ? null : 'Choose the service that best fits your question.'),
  omschrijving: (v) => {
    if (!v.trim()) return 'Please describe your project briefly.';
    return v.trim().length < 20 ? 'Please add a little more detail (at least 20 characters).' : null;
  },
};

function initForm() {
  const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
  if (!form) return;
  const status = form.querySelector<HTMLElement>('[data-form-status]');
  let attempted = false;

  const fields = Object.keys(rules)
    .map((name) => form.elements.namedItem(name))
    .filter((el): el is HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement => el instanceof HTMLElement);

  const validate = (field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => {
    const message = rules[field.name]?.(field.value, field) ?? null;
    const error = form.querySelector<HTMLElement>(`#${field.id}-error`);
    if (message) {
      field.setAttribute('aria-invalid', 'true');
      if (error) {
        error.textContent = message;
        error.hidden = false;
      }
    } else {
      field.removeAttribute('aria-invalid');
      if (error) {
        error.textContent = '';
        error.hidden = true;
      }
    }
    return !message;
  };

  fields.forEach((field) => {
    const evt = field instanceof HTMLSelectElement ? 'change' : 'input';
    field.addEventListener(evt, () => {
      if (attempted || field.getAttribute('aria-invalid') === 'true') validate(field);
      if (status) status.hidden = true;
    });
    field.addEventListener('blur', () => {
      if (attempted && field.value) validate(field);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    attempted = true;
    const invalid = fields.filter((f) => !validate(f));
    if (invalid.length) {
      if (status) status.hidden = true;
      invalid[0].focus();
      return;
    }
    // Er is nog geen verzendservice gekoppeld: geen succesmelding tonen.
    if (status) {
      const text = status.querySelector('p');
      if (text) {
        text.textContent =
          'All fields are filled in correctly. This is a demo: the form is not connected yet, so nothing has been sent.';
      }
      status.hidden = false;
    }
  });
}

initMenu();
initHeader();
initServicesLinks();
initActiveNav();
initForm();
