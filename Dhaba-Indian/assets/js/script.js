// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
    
    // Initialize scroll animations after a short delay
    setTimeout(() => {
        setupScrollAnimations();
        initParallaxEffect();
        initMenuScrollReveal();
    }, 100);
});

let activeMenuButton = null;

const MENU_DATA = {
    appetizers: [
        {
            id: 'vegetable-samosa',
            name: 'Vegetable Samosa',
            price: '$5.20',
            description: 'Crispy pastry filled with spiced potatoes, peas, and aromatic herbs. Served with mint and tamarind chutneys.',
            image: 'assets/images/menu/vegetable_samosa_6658.jpg',
            spiceLevel: '🌶️ Mild',
            dietary: 'Vegetarian'
        },
        {
            id: 'vegetable-pakora',
            name: 'Vegetable Pakora',
            price: '$7.80',
            description: 'Mixed vegetable fritters coated in chickpea batter, deep-fried to golden perfection.',
            image: 'assets/images/menu/vegetable_pakora_6653.jpg',
            spiceLevel: '🌶️ Mild',
            dietary: 'Vegan'
        },
        {
            id: 'onion-pakora',
            name: 'Onion Pakora',
            price: '$7.80',
            description: 'Crispy onion fritters seasoned with spices and deep-fried until golden brown.',
            image: 'assets/images/menu/onion_pakora_6654.jpg',
            spiceLevel: '🌶️ Mild',
            dietary: 'Vegan'
        },
        {
            id: 'paneer-pakora',
            name: 'Paneer Pakora',
            price: '$9.10',
            description: 'Fresh cottage cheese cubes marinated in spices, coated with chickpea batter and deep-fried.',
            image: 'assets/images/menu/paneer_pakora_6657.jpg',
            spiceLevel: '🌶️ Mild',
            dietary: 'Vegetarian'
        }
    ],
    vegetarian: [
        {
            id: 'aloo-gobi',
            name: 'Aloo Gobi',
            price: '$13.00',
            description: 'Potatoes and cauliflower cooked with onions, tomatoes, and aromatic spices.',
            image: 'assets/images/menu/aaloo_gobi_6663.jpg',
            spiceLevel: '🌶️🌶️ Medium',
            dietary: 'Vegan'
        },
        {
            id: 'channa-masala',
            name: 'Channa Masala',
            price: '$13.00',
            description: 'Chickpeas simmered in a tangy tomato and onion gravy with traditional spices.',
            image: 'assets/images/menu/channa_masala_6664.jpg',
            spiceLevel: '🌶️🌶️ Medium',
            dietary: 'Vegan'
        },
        {
            id: 'chhole-bhatura',
            name: 'Chhole Bhatura',
            price: '$13.00',
            description: 'Spicy chickpeas served with fluffy deep-fried bread, a North Indian favorite.',
            image: 'assets/images/menu/chhole_bhatura_6665.jpg',
            spiceLevel: '🌶️🌶️ Medium',
            dietary: 'Vegetarian'
        },
        {
            id: 'daal-makhani',
            name: 'Daal Makhani',
            price: '$13.00',
            description: 'Black lentils slow-cooked with butter, cream, and aromatic spices.',
            image: 'assets/images/menu/daal_makhani_6666.jpg',
            spiceLevel: '🌶️ Mild',
            dietary: 'Vegetarian'
        },
        {
            id: 'dal-tadka',
            name: 'Dal Tadka',
            price: '$11.70',
            description: 'Yellow lentils tempered with cumin, garlic, and traditional spices.',
            image: 'assets/images/menu/dal_tadka_6667.jpg',
            spiceLevel: '🌶️ Mild',
            dietary: 'Vegan'
        },
        {
            id: 'kadhai-paneer',
            name: 'Kadhai Paneer',
            price: '$14.30',
            description: 'Cottage cheese cooked with bell peppers, onions, and tomatoes in a spicy kadhai gravy.',
            image: 'assets/images/menu/kadhai_paneer_6668.jpg',
            spiceLevel: '🌶️🌶️ Medium',
            dietary: 'Vegetarian'
        },
        {
            id: 'malai-kofta',
            name: 'Malai Kofta',
            price: '$14.30',
            description: 'Soft vegetable and cheese dumplings in a rich, creamy tomato-cashew sauce.',
            image: 'assets/images/menu/malai_kofta_6669.jpg',
            spiceLevel: '🌶️ Mild',
            dietary: 'Vegetarian'
        },
        {
            id: 'matar-paneer',
            name: 'Matar Paneer',
            price: '$14.30',
            description: 'Green peas and cottage cheese cubes in a creamy tomato-based curry.',
            image: 'assets/images/menu/matter_paneer_6670.jpg',
            spiceLevel: '🌶️ Mild',
            dietary: 'Vegetarian'
        },
        {
            id: 'paneer-tikka-masala',
            name: 'Paneer Tikka Masala',
            price: '$14.30',
            description: 'Grilled cottage cheese cubes in a rich, creamy tomato sauce with aromatic spices.',
            image: 'assets/images/menu/paneer_tikka_masala_6672.jpg',
            spiceLevel: '🌶️🌶️ Medium',
            dietary: 'Vegetarian'
        },
        {
            id: 'saag-paneer',
            name: 'Saag Paneer',
            price: '$14.30',
            description: 'Cottage cheese cubes in a creamy spinach sauce with traditional spices.',
            image: 'assets/images/menu/saag_paneer_6673.jpg',
            spiceLevel: '🌶️ Mild',
            dietary: 'Vegetarian'
        },
        {
            id: 'seasonal-vegetable-curry',
            name: 'Seasonal Vegetable Curry',
            price: '$13.00',
            description: 'Fresh seasonal vegetables cooked in a flavorful curry sauce.',
            image: 'assets/images/menu/seasonal_vegetable_curry_6674.jpg',
            spiceLevel: '🌶️🌶️ Medium',
            dietary: 'Vegan'
        },
        {
            id: 'vegetable-korma',
            name: 'Vegetable Korma',
            price: '$13.00',
            description: 'Mixed vegetables in a rich, creamy cashew and coconut sauce.',
            image: 'assets/images/menu/vegetable_korma_6676.jpg',
            spiceLevel: '🌶️ Mild',
            dietary: 'Vegetarian'
        }
    ],
    nonVeg: [
        {
            id: 'butter-chicken',
            name: 'Butter Chicken',
            price: '$15.60',
            description: 'Tender chicken pieces in a rich, creamy tomato-butter sauce. Our signature dish!',
            image: 'assets/images/menu/butter_chicken_6678.jpg',
            spiceLevel: '🌶️ Mild',
            dietary: 'Contains Dairy'
        },
        {
            id: 'chicken-tikka-masala',
            name: 'Chicken Tikka Masala',
            price: '$15.60',
            description: 'Grilled chicken chunks in a creamy tomato-based curry with aromatic spices.',
            image: 'assets/images/menu/chicken_tikka_masala_6684.jpg',
            spiceLevel: '🌶️🌶️ Medium',
            dietary: 'Contains Dairy'
        },
        {
            id: 'chicken-curry',
            name: 'Chicken Curry',
            price: '$15.60',
            description: 'Traditional chicken curry cooked with onions, tomatoes, and authentic spices.',
            image: 'assets/images/menu/chicken_curry_6680.jpg',
            spiceLevel: '🌶️🌶️ Medium',
            dietary: 'Gluten-Free'
        },
        {
            id: 'chicken-kadhai',
            name: 'Chicken Kadhai',
            price: '$15.60',
            description: 'Chicken cooked with bell peppers, onions, and tomatoes in traditional kadhai style.',
            image: 'assets/images/menu/chicken_kadhai_6681.jpg',
            spiceLevel: '🌶️🌶️ Medium',
            dietary: 'Gluten-Free'
        },
        {
            id: 'chicken-korma',
            name: 'Chicken Korma',
            price: '$15.60',
            description: 'Mild chicken curry in a rich cashew and cream sauce with aromatic spices.',
            image: 'assets/images/menu/chicken_korma_6682.jpg',
            spiceLevel: '🌶️ Mild',
            dietary: 'Contains Nuts'
        },
        {
            id: 'chicken-saag',
            name: 'Chicken Saag',
            price: '$15.60',
            description: 'Tender chicken pieces cooked in a creamy spinach sauce with traditional spices.',
            image: 'assets/images/menu/chicken_saag_6683.jpg',
            spiceLevel: '🌶️🌶️ Medium',
            dietary: 'Contains Dairy'
        },
        {
            id: 'chicken-vindaloo',
            name: 'Chicken Vindaloo',
            price: '$15.60',
            description: 'Spicy and tangy Goan-style chicken curry with vinegar and hot spices.',
            image: 'assets/images/menu/chicken_vindaloo_6685.jpg',
            spiceLevel: '🌶️🌶️🌶️ Hot',
            dietary: 'Spicy'
        },
        {
            id: 'egg-curry',
            name: 'Egg Curry',
            price: '$13.00',
            description: 'Boiled eggs in a flavorful tomato and onion gravy with aromatic spices.',
            image: 'assets/images/menu/egg_curry_6687.jpg',
            spiceLevel: '🌶️🌶️ Medium',
            dietary: 'Gluten-Free'
        },
        {
            id: 'egg-masala',
            name: 'Egg Masala',
            price: '$13.00',
            description: 'Boiled eggs cooked in a spicy masala gravy with onions and tomatoes.',
            image: 'assets/images/menu/egg_masala_6688.jpg',
            spiceLevel: '🌶️🌶️ Medium',
            dietary: 'Gluten-Free'
        },
        {
            id: 'lamb-saag',
            name: 'Lamb Saag',
            price: '$15.60',
            description: 'Tender lamb pieces cooked in a creamy spinach sauce with aromatic spices.',
            image: 'assets/images/menu/lamb_saag_6689.jpg',
            spiceLevel: '🌶️🌶️ Medium',
            dietary: 'Contains Dairy'
        },
        {
            id: 'lamb-curry',
            name: 'Lamb Curry',
            price: '$15.60',
            description: 'Traditional lamb curry with onions, tomatoes, and authentic Indian spices.',
            image: 'assets/images/menu/lamb_curry_6691.jpg',
            spiceLevel: '🌶️🌶️ Medium',
            dietary: 'Gluten-Free'
        },
        {
            id: 'lamb-korma',
            name: 'Lamb Korma',
            price: '$15.60',
            description: 'Mild lamb curry in a rich cashew and cream sauce with aromatic spices.',
            image: 'assets/images/menu/lamb_korma_6692.jpg',
            spiceLevel: '🌶️ Mild',
            dietary: 'Contains Nuts'
        },
        {
            id: 'lamb-tikka-masala',
            name: 'Lamb Tikka Masala',
            price: '$15.60',
            description: 'Grilled lamb chunks in a creamy tomato-based curry with aromatic spices.',
            image: 'assets/images/menu/lamb_tikka_masala_6693.jpg',
            spiceLevel: '🌶️🌶️ Medium',
            dietary: 'Contains Dairy'
        },
        {
            id: 'lamb-vindaloo',
            name: 'Lamb Vindaloo',
            price: '$15.60',
            description: 'Spicy and tangy Goan-style lamb curry with vinegar and hot spices.',
            image: 'assets/images/menu/lamb_vindaloo_6694.jpg',
            spiceLevel: '🌶️🌶️🌶️ Hot',
            dietary: 'Spicy'
        },
        {
            id: 'shrimp-vindaloo',
            name: 'Shrimp Vindaloo',
            price: '$15.60',
            description: 'Spicy and tangy Goan-style shrimp curry with vinegar and hot spices.',
            image: 'assets/images/menu/shrimp_vindaloo_6696.jpg',
            spiceLevel: '🌶️🌶️🌶️ Hot',
            dietary: 'Seafood'
        },
        {
            id: 'shrimp-curry',
            name: 'Shrimp Curry',
            price: '$15.60',
            description: 'Fresh shrimp cooked in a flavorful curry sauce with aromatic spices.',
            image: 'assets/images/menu/shrimp_curry_6698.jpg',
            spiceLevel: '🌶️🌶️ Medium',
            dietary: 'Seafood'
        }
    ],
    breads: [
        {
            id: 'naan',
            name: 'Naan',
            price: '$3.90',
            description: 'Traditional Indian flatbread baked in a clay oven, soft and fluffy.',
            image: 'assets/images/menu/chhole_bhatura_6665.jpg',
            dietary: 'Vegetarian'
        },
        {
            id: 'garlic-naan',
            name: 'Garlic Naan',
            price: '$4.55',
            description: 'Soft naan bread topped with fresh garlic and cilantro.',
            image: 'assets/images/menu/chhole_bhatura_6665.jpg',
            dietary: 'Vegetarian'
        },
        {
            id: 'roti',
            name: 'Roti',
            price: '$3.25',
            description: 'Whole wheat flatbread, a healthier alternative to naan.',
            image: 'assets/images/menu/aaloo_gobi_6663.jpg',
            dietary: 'Vegan'
        },
        {
            id: 'basmati-rice',
            name: 'Basmati Rice',
            price: '$3.90',
            description: 'Aromatic long-grain basmati rice, perfectly steamed.',
            image: 'assets/images/menu/dal_tadka_6667.jpg',
            dietary: 'Vegan'
        }
    ],
    desserts: [
        {
            id: 'gulab-jamun',
            name: 'Gulab Jamun',
            price: '$5.20',
            description: 'Sweet milk dumplings soaked in rose-flavored sugar syrup.',
            image: 'assets/images/menu/malai_kofta_6669.jpg',
            dietary: 'Vegetarian'
        },
        {
            id: 'kheer',
            name: 'Kheer',
            price: '$5.20',
            description: 'Traditional Indian rice pudding with cardamom, nuts, and raisins.',
            image: 'assets/images/menu/vegetable_korma_6676.jpg',
            dietary: 'Vegetarian'
        },
        {
            id: 'mango-lassi',
            name: 'Mango Lassi',
            price: '$5.20',
            description: 'Refreshing yogurt drink blended with sweet mango pulp.',
            image: 'assets/images/menu/channa_masala_6664.jpg',
            dietary: 'Vegetarian'
        },
        {
            id: 'sweet-lassi',
            name: 'Sweet Lassi',
            price: '$4.55',
            description: 'Traditional sweet yogurt drink, cool and refreshing.',
            image: 'assets/images/menu/daal_makhani_6666.jpg',
            dietary: 'Vegetarian'
        },
        {
            id: 'masala-chai',
            name: 'Masala Chai',
            price: '$3.25',
            description: 'Indian spiced tea with milk, cardamom, ginger, and cinnamon.',
            image: 'assets/images/menu/dal_tadka_6667.jpg',
            dietary: 'Vegetarian'
        },
        {
            id: 'soft-drinks',
            name: 'Soft Drinks',
            price: '$2.08',
            description: 'Coca-Cola, Pepsi, Sprite, 7UP, and other refreshing beverages.',
            image: 'assets/images/menu/chicken_curry_6680.jpg',
            dietary: 'Vegan'
        }
    ]
};

const MENU_META = {
    chefFavorites: {
        label: "Chef's Table",
        tagline: 'Crowd-pleasing creations from Chef Gusai',
        accent: '#f77d48',
        itemIds: ['butter-chicken', 'paneer-tikka-masala', 'malai-kofta', 'shrimp-vindaloo', 'chhole-bhatura', 'saag-paneer']
    },
    appetizers: {
        label: 'Appetizers',
        tagline: 'Street-side inspirations to start your feast',
        accent: '#f0b429'
    },
    vegetarian: {
        label: 'Vegetarian',
        tagline: 'Plant-forward comfort made with love',
        accent: '#4f9d92'
    },
    nonVeg: {
        label: 'Non-Vegetarian',
        tagline: 'From tandoor to curry with bold spice',
        accent: '#5a67d8'
    },
    breads: {
        label: 'Breads & Rice',
        tagline: 'Fresh-baked breads and heritage grains',
        accent: '#fcd277'
    },
    desserts: {
        label: 'Desserts & Drinks',
        tagline: 'Sweet finishes and sippable refreshment',
        accent: '#d799ff'
    },
    all: {
        label: 'Full Menu',
        tagline: 'Explore the entire Dhaba experience',
        accent: '#4c6ef5'
    }
};

const MENU_CATEGORY_ORDER = ['chefFavorites', 'appetizers', 'vegetarian', 'nonVeg', 'breads', 'desserts', 'all'];

const MENU_LOOKUP = buildMenuLookup();

let menuIsOpen = false;
let menuInitialized = false;
let activeCategoryId = null;
let activePreviewItemId = null;

const MENU_DEFAULT_CATEGORY = 'chefFavorites';
let currentMenuLocation = getDefaultMenuLocation();

let heroSliderState = {
    index: 0,
    interval: null,
    slides: [],
    dots: [],
    container: null,
    dotsContainer: null
};

const HERO_SLIDER_INTERVAL = 3800;

const menuElements = {
    wrapper: null,
    filters: null,
    gallery: null,
    preview: null,
    previewImage: null,
    previewCategory: null,
    previewTitle: null,
    previewDescription: null,
    heroTagline: null,
    emptyState: null
};

function buildMenuLookup() {
    const map = new Map();
    Object.entries(MENU_DATA).forEach(([categoryId, items]) => {
        items.forEach(item => {
            map.set(item.id, { ...item, categoryId });
        });
    });
    return map;
}

function augmentMenuItem(item, categoryId, overrides = {}) {
    const sourceMeta = MENU_META[categoryId] || {};
    const originCategoryId = overrides.originCategoryId || item.categoryId || categoryId;
    const originMeta = MENU_META[originCategoryId] || {};

    const accentColor = overrides.accent || sourceMeta.accent || originMeta.accent || '#f77d48';
    const displayLabel = overrides.label || sourceMeta.label || originMeta.label || 'Menu';
    const originLabel = overrides.originCategoryLabel || originMeta.label || '';

    let metaLabel = overrides.metaLabel;
    if (!metaLabel) {
        if (categoryId === originCategoryId) {
            metaLabel = originLabel;
        } else if (originLabel) {
            metaLabel = `${displayLabel} · ${originLabel}`;
        } else {
            metaLabel = displayLabel;
        }
    }

    return {
        ...item,
        categoryId,
        accent: accentColor,
        categoryLabel: displayLabel,
        originCategoryId,
        originCategoryLabel: originLabel,
        metaLabel
    };
}

function getItemsForCategory(categoryId) {
    if (categoryId === 'all') {
        return Object.entries(MENU_DATA).flatMap(([key, items]) => {
            const originMeta = MENU_META[key] || {};
            return items.map(item => augmentMenuItem(item, 'all', {
                accent: originMeta.accent,
                label: originMeta.label,
                originCategoryId: key,
                originCategoryLabel: originMeta.label,
                metaLabel: originMeta.label
            }));
        });
    }

    if (categoryId === 'chefFavorites') {
        const meta = MENU_META.chefFavorites || {};
        const ids = meta.itemIds || [];
        return ids.map(id => {
            const base = MENU_LOOKUP.get(id);
            if (!base) {
                return null;
            }
            return augmentMenuItem(base, 'chefFavorites', {
                accent: meta.accent,
                label: meta.label,
                originCategoryId: base.categoryId,
                originCategoryLabel: MENU_META[base.categoryId]?.label,
                metaLabel: meta.label && MENU_META[base.categoryId]?.label ? `${meta.label} · ${MENU_META[base.categoryId].label}` : meta.label
            });
        }).filter(Boolean);
    }

    const items = MENU_DATA[categoryId] || [];
    return items.map(item => augmentMenuItem(item, categoryId, {
        originCategoryId: categoryId,
        originCategoryLabel: MENU_META[categoryId]?.label,
        metaLabel: MENU_META[categoryId]?.label
    }));
}

function hydrateMenuElements() {
    menuElements.wrapper = getMenuWrapperElement();
    menuElements.filters = document.getElementById('menuFilters');
    menuElements.gallery = document.getElementById('menuGallery');
    menuElements.preview = document.getElementById('menuPreview');

    if (menuElements.preview) {
        menuElements.previewImage = menuElements.preview.querySelector('.menu-preview-image');
        menuElements.previewCategory = menuElements.preview.querySelector('.menu-preview-category');
        menuElements.previewTitle = menuElements.preview.querySelector('.menu-preview-title');
        menuElements.previewDescription = menuElements.preview.querySelector('.menu-preview-description');
    }

    menuElements.heroTagline = document.querySelector('.menu-hero-copy .menu-kicker');

    return Boolean(menuElements.filters && menuElements.gallery);
}

function setupHeroSlider() {
    const container = document.getElementById('heroSlider');
    const dotsContainer = document.getElementById('heroDots');

    if (!container) {
        return;
    }

    const slides = Array.from(container.querySelectorAll('.hero-slide'));

    if (!slides.length) {
        return;
    }

    heroSliderState.container = container;
    heroSliderState.dotsContainer = dotsContainer || null;
    heroSliderState.slides = slides;
    heroSliderState.dots = [];

    const activeIndex = slides.findIndex(slide => slide.classList.contains('is-active'));
    const startIndex = activeIndex >= 0 ? activeIndex : 0;

    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'hero-dot';
            dot.dataset.index = index;
            dot.setAttribute('aria-label', `Show hero slide ${index + 1}`);
            dot.setAttribute('aria-pressed', index === startIndex ? 'true' : 'false');

            dot.addEventListener('click', () => {
                goToHeroSlide(index, { userInitiated: true });
            });

            dot.addEventListener('keydown', (event) => {
                if (event.key === 'ArrowRight') {
                    event.preventDefault();
                    goToHeroSlide(index + 1, { userInitiated: true });
                } else if (event.key === 'ArrowLeft') {
                    event.preventDefault();
                    goToHeroSlide(index - 1, { userInitiated: true });
                }
            });

            dotsContainer.appendChild(dot);
            heroSliderState.dots.push(dot);
        });
    }

    goToHeroSlide(startIndex, { immediate: true });

    startHeroAutoplay();

    container.addEventListener('mouseenter', () => {
        stopHeroAutoplay();
    });

    container.addEventListener('mouseleave', () => {
        startHeroAutoplay();
    });

    let touchStartX = null;

    container.addEventListener('touchstart', (event) => {
        if (event.changedTouches && event.changedTouches.length) {
            touchStartX = event.changedTouches[0].clientX;
        }
    }, { passive: true });

    container.addEventListener('touchend', (event) => {
        if (!touchStartX || !event.changedTouches || !event.changedTouches.length) {
            touchStartX = null;
            return;
        }

        const deltaX = event.changedTouches[0].clientX - touchStartX;
        const swipeThreshold = 40;

        if (Math.abs(deltaX) > swipeThreshold) {
            if (deltaX < 0) {
                goToHeroSlide(heroSliderState.index + 1, { userInitiated: true });
            } else {
                goToHeroSlide(heroSliderState.index - 1, { userInitiated: true });
            }
        }

        touchStartX = null;
    }, { passive: true });
}

function goToHeroSlide(index, options = {}) {
    if (!heroSliderState.slides.length) {
        return;
    }

    const total = heroSliderState.slides.length;
    const normalizedIndex = ((index % total) + total) % total;

    heroSliderState.slides.forEach((slide, slideIndex) => {
        slide.classList.toggle('is-active', slideIndex === normalizedIndex);
    });

    heroSliderState.dots.forEach((dot, dotIndex) => {
        const isActive = dotIndex === normalizedIndex;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    heroSliderState.index = normalizedIndex;

    if (options.userInitiated) {
        startHeroAutoplay();
    }
}

function startHeroAutoplay() {
    if (!heroSliderState.slides.length) {
        return;
    }

    stopHeroAutoplay();

    heroSliderState.interval = setInterval(() => {
        goToHeroSlide(heroSliderState.index + 1, { immediate: true });
    }, HERO_SLIDER_INTERVAL);
}

function stopHeroAutoplay() {
    if (heroSliderState.interval) {
        clearInterval(heroSliderState.interval);
        heroSliderState.interval = null;
    }
}

function initializeDynamicMenu() {
    if (menuInitialized) {
        return;
    }

    const hasElements = hydrateMenuElements();
    if (!hasElements) {
        return;
    }

    renderMenuFilters();
    selectMenuCategory(MENU_DEFAULT_CATEGORY);

    menuInitialized = true;
}

function renderMenuFilters() {
    if (!menuElements.filters) {
        return;
    }

    menuElements.filters.innerHTML = '';

    const fragment = document.createDocumentFragment();

    MENU_CATEGORY_ORDER.forEach((categoryId, index) => {
        const meta = MENU_META[categoryId];
        if (!meta) {
            return;
        }

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'menu-filter-btn';
        button.dataset.categoryId = categoryId;
        button.setAttribute('role', 'tab');
        button.setAttribute('aria-selected', 'false');
        button.setAttribute('aria-controls', `menu-category-${categoryId}`);

        button.innerHTML = `
            <span class="menu-filter-label">${meta.label}</span>
            <span class="menu-filter-tagline">${meta.tagline || ''}</span>
        `;

        button.addEventListener('click', () => {
            selectMenuCategory(categoryId);
        });

        if (index === 0) {
            button.dataset.default = 'true';
        }

        fragment.appendChild(button);
    });

    menuElements.filters.appendChild(fragment);
}

function selectMenuCategory(categoryId) {
    if (!categoryId) {
        return;
    }

    if (categoryId === activeCategoryId && menuInitialized) {
        return;
    }

    const items = getItemsForCategory(categoryId);
    const meta = MENU_META[categoryId] || {};

    activeCategoryId = categoryId;

    updateFilterActiveState(categoryId);
    renderMenuGallery(items);
    applyCategoryMeta(meta);

    if (items.length) {
        updateMenuPreview(items[0]);
    } else {
        showMenuEmptyState(meta);
    }
}

function updateFilterActiveState(categoryId) {
    if (!menuElements.filters) {
        return;
    }

    const buttons = menuElements.filters.querySelectorAll('.menu-filter-btn');

    buttons.forEach(button => {
        const isActive = button.dataset.categoryId === categoryId;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-selected', isActive ? 'true' : 'false');
        if (isActive && menuInitialized) {
            button.focus({ preventScroll: true });
        }
    });
}

function renderMenuGallery(items) {
    if (!menuElements.gallery) {
        return;
    }

    menuElements.gallery.innerHTML = '';
    menuElements.gallery.setAttribute('data-state', 'loading');

    if (!items.length) {
        menuElements.gallery.appendChild(getMenuEmptyState());
        menuElements.gallery.setAttribute('data-state', 'empty');
        return;
    }

    const fragment = document.createDocumentFragment();

    items.forEach((item, index) => {
        const card = createMenuCard(item, index);
        fragment.appendChild(card);
    });

    menuElements.gallery.appendChild(fragment);
    menuElements.gallery.setAttribute('data-state', 'ready');
}

function createMenuCard(item, index) {
    const card = document.createElement('article');
    card.className = 'menu-card';
    card.dataset.itemId = item.id;
    card.dataset.categoryId = item.categoryId;
    card.style.setProperty('--card-accent', item.accent || '#f77d48');
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');

    card.innerHTML = `
        <div class="menu-card-image">
            <img src="${item.image}" alt="${item.name}" loading="lazy" />
            <span class="menu-card-badge">${item.metaLabel || item.categoryLabel || ''}</span>
        </div>
        <div class="menu-card-body">
            <header class="menu-card-header">
                <h4>${item.name}</h4>
                <span class="menu-card-price">${item.price}</span>
            </header>
            <p class="menu-card-description">${item.description}</p>
            <footer class="menu-card-meta">
                ${item.spiceLevel ? `<span class="menu-card-tag">${item.spiceLevel}</span>` : ''}
                ${item.dietary ? `<span class="menu-card-tag">${item.dietary}</span>` : ''}
            </footer>
        </div>
    `;

    card.addEventListener('mouseenter', () => updateMenuPreview(item));
    card.addEventListener('focus', () => updateMenuPreview(item));
    card.addEventListener('click', () => updateMenuPreview(item));

    if (activePreviewItemId === item.id || (!activePreviewItemId && index === 0)) {
        card.classList.add('is-active');
    }

    return card;
}

function updateMenuPreview(item) {
    if (!item || !menuElements.preview || !menuElements.previewImage) {
        return;
    }

    if (activePreviewItemId === item.id) {
        return;
    }

    activePreviewItemId = item.id;

    menuElements.preview.style.setProperty('--accent-color', item.accent || '#f77d48');
    menuElements.previewImage.style.backgroundImage = `url('${item.image}')`;
    menuElements.previewImage.setAttribute('aria-hidden', 'true');

    if (menuElements.previewCategory) {
        menuElements.previewCategory.textContent = item.metaLabel || item.categoryLabel || '';
    }

    if (menuElements.previewTitle) {
        menuElements.previewTitle.textContent = item.name;
    }

    if (menuElements.previewDescription) {
        menuElements.previewDescription.textContent = item.description;
    }

    highlightActiveMenuCard(item.id);
}

function highlightActiveMenuCard(itemId) {
    if (!menuElements.gallery) {
        return;
    }

    const cards = menuElements.gallery.querySelectorAll('.menu-card');

    cards.forEach(card => {
        const isActive = card.dataset.itemId === itemId;
        card.classList.toggle('is-active', isActive);
    });
}

function applyCategoryMeta(meta) {
    if (!meta) {
        return;
    }

    if (menuElements.heroTagline && meta.tagline) {
        menuElements.heroTagline.textContent = meta.tagline;
    }

    if (menuElements.preview) {
        menuElements.preview.dataset.category = meta.label || '';
    }
}

function getMenuEmptyState() {
    if (!menuElements.emptyState) {
        const empty = document.createElement('div');
        empty.className = 'menu-empty-state';
        empty.innerHTML = `
            <div class="menu-empty-icon" aria-hidden="true">🍽️</div>
            <h3>No dishes yet</h3>
            <p>We are curating new specialties for this category. Please check back soon.</p>
        `;
        menuElements.emptyState = empty;
    }

    return menuElements.emptyState.cloneNode(true);
}

function showMenuEmptyState(meta) {
    if (!menuElements.gallery) {
        return;
    }

    menuElements.gallery.innerHTML = '';
    menuElements.gallery.appendChild(getMenuEmptyState());
    menuElements.gallery.setAttribute('data-state', 'empty');

    if (menuElements.previewCategory) {
        menuElements.previewCategory.textContent = meta?.label || 'Menu';
    }

    if (menuElements.previewTitle) {
        menuElements.previewTitle.textContent = 'New dishes coming soon';
    }

    if (menuElements.previewDescription) {
        menuElements.previewDescription.textContent = 'Our culinary team is busy crafting the next signature plate for this category. Check back shortly!';
    }

    if (menuElements.previewImage) {
        menuElements.previewImage.style.backgroundImage = 'linear-gradient(135deg, rgba(250, 250, 250, 0.9), rgba(236, 233, 252, 0.9))';
    }
}

// Initialize all website functionality
function initializeWebsite() {
    setupNavigation();
    setupLocationTabs();
    setupMenuButtons();
    setupContactForm();
    setupScrollEffects();
    setupMobileMenu();
    setupHeroSlider();
    setupMenuToggleControls();
    initializeDynamicMenu();
    autoOpenDefaultMenu();
}

// Auto-open menu for the first active location on page load
function autoOpenDefaultMenu() {
    // Wait a bit to ensure DOM is fully ready
    setTimeout(() => {
        // Find the active location card
        const activeCard = document.querySelector('.location-card.active');
        
        if (activeCard) {
            // Find the menu button in the active card
            const menuButton = activeCard.querySelector('.menu-btn');
            
            if (menuButton) {
                // Extract location details and open menu
                const locationDetails = extractMenuDetailsFromElement(menuButton);
                
                // Mark button as active
                menuButton.classList.add('active');
                activeMenuButton = menuButton;
                
                // Open the menu section WITHOUT scrolling (false parameter)
                openMenuSection(locationDetails, false);
                
                console.log('Auto-opened menu for default location (no scroll):', locationDetails.name);
            }
        }
    }, 300); // Small delay to ensure all initialization is complete
}

// Navigation Setup
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const url = getLinkUrl(link);
            const samePageAnchor = isSamePageAnchor(url);
            const datasetTarget = link.dataset.scrollTarget || '';
            const hashTarget = samePageAnchor && url ? url.hash.substring(1) : '';
            const scrollTarget = samePageAnchor ? (datasetTarget || hashTarget) : hashTarget;

            if (datasetTarget && !samePageAnchor) {
                return;
            }

            if (!scrollTarget) {
                return;
            }

            e.preventDefault();

            if (scrollTarget === 'menu') {
                const menuDetails = extractMenuDetailsFromElement(link);
                clearActiveMenuButton();

                const mode = link.dataset.menuToggleMode || 'open';
                if (mode === 'toggle') {
                    toggleMenuSection(menuDetails);
                } else if (mode === 'close') {
                    closeMenuSection();
                } else {
                    openMenuSection(menuDetails);
                }
            } else {
                const targetElement = document.getElementById(scrollTarget);
                if (targetElement) {
                    smoothScrollTo(targetElement);
                }
            }

            closeMobileMenu();
        });
    });
}

function getLinkUrl(link) {
    const href = link.getAttribute('href') || link.href || '';
    try {
        return new URL(href, window.location.href);
    } catch (error) {
        return null;
    }
}

function isSamePageAnchor(url) {
    if (!url || !url.hash) {
        return false;
    }

    const normalizePath = (path) => path.replace(/index\.php$/i, '').replace(/\/+/g, '/');
    const currentPath = normalizePath(window.location.pathname);
    const targetPath = normalizePath(url.pathname);

    return currentPath === targetPath;
}

// Location Tabs Setup
function setupLocationTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const locationCards = document.querySelectorAll('.location-card');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const locationId = button.getAttribute('data-location');
            
            // Remove active class from all buttons and cards
            tabButtons.forEach(btn => btn.classList.remove('active'));
            locationCards.forEach(card => card.classList.remove('active'));
            
            // Add active class to clicked button and corresponding card
            button.classList.add('active');
            const targetCard = document.getElementById(locationId);
            if (targetCard) {
                targetCard.classList.add('active');

                const menuButton = targetCard.querySelector('.menu-btn');
                const locationDetails = menuButton ? extractMenuDetailsFromElement(menuButton) : null;

                if (menuButton) {
                    if (activeMenuButton !== menuButton) {
                        clearActiveMenuButton();
                        menuButton.classList.add('active');
                        activeMenuButton = menuButton;
                    }
                } else {
                    clearActiveMenuButton();
                }

                openMenuSection(locationDetails);
            }
        });
    });
}

// Contact Form Setup
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleContactFormSubmission(contactForm);
        });
    }
}

// Handle Contact Form Submission
function handleContactFormSubmission(form) {
    const formData = new FormData(form);
    const formValues = {};
    
    // Get form values
    for (let [key, value] of formData.entries()) {
        formValues[key] = value;
    }
    
    // Basic validation
    if (!formValues.name || !formValues.email || !formValues.message) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    if (!isValidEmail(formValues.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission (In Phase 2, this will be handled by PHP)
    showNotification('Thank you for your message! We will get back to you soon.', 'success');
    form.reset();
    
    console.log('Contact form submitted:', formValues);
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification System
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 20px',
        borderRadius: '5px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10000',
        animation: 'slideInRight 0.3s ease',
        maxWidth: '300px'
    });
    
    // Set background color based on type
    switch (type) {
        case 'success':
            notification.style.backgroundColor = '#27ae60';
            break;
        case 'error':
            notification.style.backgroundColor = '#e74c3c';
            break;
        default:
            notification.style.backgroundColor = '#3498db';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Scroll Effects Setup
function setupScrollEffects() {
    window.addEventListener('scroll', () => {
        handleScrollEffects();
    });
}

// Handle Scroll Effects
function handleScrollEffects() {
    const header = document.querySelector('.header');
    const scrollTop = window.pageYOffset;
    
    if (!header) {
        return;
    }
    
    // Header background opacity based on scroll
    if (scrollTop > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    // Animate elements on scroll (simple intersection observer alternative)
    animateOnScroll();
}

// Animate elements when they come into view
function animateOnScroll() {
    const elements = document.querySelectorAll('.location-card, .feature, .contact-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Mobile Menu Setup
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                closeMobileMenu();
            });
        });
    }
}

// Close Mobile Menu
function closeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}

// Smooth Scroll Function
function smoothScrollTo(element) {
    const header = document.querySelector('.header');
    const headerHeight = header ? header.offsetHeight : 0;
    const elementPosition = element.offsetTop - headerHeight - 20;
    
    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
    });
}

// Scroll to Locations (called from hero button)
function scrollToLocations() {
    const locationsSection = document.getElementById('locations');
    if (locationsSection) {
        smoothScrollTo(locationsSection);
    }
}

// Scroll to Menu (called from hero button)
function scrollToMenu() {
    clearActiveMenuButton();
    openMenuSection();
}

// Utility Functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Load placeholder images (for development)
function loadPlaceholderImages() {
    const images = document.querySelectorAll('img[src*="assets/images/"]');
    
    images.forEach(img => {
        // Set placeholder background while image loads
        img.style.backgroundColor = '#f0f0f0';
        img.style.minHeight = '200px';
        
        // Handle image loading errors
        img.addEventListener('error', () => {
            img.style.backgroundColor = '#e0e0e0';
            img.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 200px; color: #666;">Image Placeholder</div>';
        });
    });
}

// Initialize placeholder images on load
document.addEventListener('DOMContentLoaded', loadPlaceholderImages);

// Setup Menu Buttons Functionality
function setupMenuButtons() {
    const menuButtons = document.querySelectorAll('.menu-btn');
    const menuSection = document.getElementById('menu');

    if (!menuButtons.length || !menuSection) {
        return;
    }

    menuButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            const details = extractMenuDetailsFromElement(button);
            const isSameButton = activeMenuButton === button;

            if (menuIsOpen && isSameButton) {
                closeMenuSection();
                return;
            }

            if (!menuIsOpen) {
                openMenuSection(details);
            } else {
                openMenuSection(details);
            }

            if (activeMenuButton && activeMenuButton !== button) {
                activeMenuButton.classList.remove('active');
            }

            button.classList.add('active');
            activeMenuButton = button;
        });
    });
}

function setupMenuToggleControls() {
    const toggleElements = document.querySelectorAll('[data-menu-toggle="true"]:not(.nav-link):not(.menu-btn)');

    if (!toggleElements.length) {
        return;
    }

    toggleElements.forEach(element => {
        element.setAttribute('aria-controls', 'menu');

        element.addEventListener('click', (event) => {
            const tagName = element.tagName ? element.tagName.toLowerCase() : '';
            if (tagName === 'a') {
                event.preventDefault();
            }

            const details = extractMenuDetailsFromElement(element);
            const mode = element.dataset.menuToggleMode || 'toggle';

            if (mode === 'toggle') {
                toggleMenuSection(details);
            } else if (mode === 'close') {
                closeMenuSection();
            } else {
                openMenuSection(details);
            }
        });
    });

    syncMenuToggleUI();
}

function clearActiveMenuButton() {
    if (activeMenuButton) {
        activeMenuButton.classList.remove('active');
        activeMenuButton = null;
    }
}

function getDefaultMenuLocation() {
    return {
        name: 'PSU Campus',
        address: '1929 SW 4th Ave, Portland, OR 97201',
        phone: '503-752-8592'
    };
}

function sanitizeMenuLocation(details) {
    if (!details) {
        return null;
    }

    const name = typeof details.name === 'string' ? details.name.trim() : '';
    const address = typeof details.address === 'string' ? details.address.trim() : '';
    const phone = typeof details.phone === 'string' ? details.phone.trim() : '';

    if (!name || !address || !phone) {
        return null;
    }

    return { name, address, phone };
}

function resolveMenuLocation(details) {
    const sanitizedDetails = sanitizeMenuLocation(details);

    if (sanitizedDetails) {
        currentMenuLocation = sanitizedDetails;
        return currentMenuLocation;
    }

    const existingLocation = sanitizeMenuLocation(currentMenuLocation);
    if (existingLocation) {
        currentMenuLocation = existingLocation;
        return currentMenuLocation;
    }

    currentMenuLocation = sanitizeMenuLocation(getDefaultMenuLocation());
    return currentMenuLocation;
}

function extractMenuDetailsFromElement(element) {
    if (!element || !element.dataset) {
        return null;
    }

    const name = element.dataset.menuLocationName || element.dataset.locationName;
    const address = element.dataset.menuLocationAddress || element.dataset.locationAddress;
    const phone = element.dataset.menuLocationPhone || element.dataset.locationPhone;

    return sanitizeMenuLocation({ name, address, phone });
}

function getMenuDomRefs() {
    return {
        menuSection: document.getElementById('menu'),
        locationInfo: document.getElementById('selected-location-info'),
        locationName: document.getElementById('location-name'),
        locationAddress: document.getElementById('location-address'),
        locationPhone: document.getElementById('location-phone-order')
    };
}

function getMenuWrapperElement() {
    if (!menuElements.wrapper) {
        menuElements.wrapper = document.querySelector('.menu-section-wrapper');
    }

    return menuElements.wrapper;
}

function syncMenuToggleUI() {
    const toggleElements = document.querySelectorAll('[data-menu-toggle="true"]');

    toggleElements.forEach(element => {
        const toggleMode = element.dataset.menuToggleMode || 'toggle';
        element.setAttribute('aria-pressed', menuIsOpen ? 'true' : 'false');
        element.setAttribute('aria-expanded', menuIsOpen ? 'true' : 'false');

        if (menuIsOpen) {
            element.classList.add('is-active');
        } else {
            element.classList.remove('is-active');
        }

        if (toggleMode === 'toggle') {
            if (!element.dataset.menuOpenLabelStored) {
                const providedOpenLabel = element.dataset.menuOpenLabel || element.textContent.trim() || 'View Menu';
                element.dataset.menuOpenLabelStored = providedOpenLabel;
            }

            if (!element.dataset.menuCloseLabelStored) {
                const providedCloseLabel = element.dataset.menuCloseLabel || 'Hide Menu';
                element.dataset.menuCloseLabelStored = providedCloseLabel;
            }

            const targetLabel = menuIsOpen ? element.dataset.menuCloseLabelStored : element.dataset.menuOpenLabelStored;
            if (targetLabel && element.textContent.trim() !== targetLabel) {
                element.textContent = targetLabel;
            }
        }
    });
}

function openMenuSection(details, shouldScroll = true) {
    const wrapper = getMenuWrapperElement();

    if (!wrapper) {
        return;
    }

    const wasOpen = menuIsOpen;
    const locationDetails = resolveMenuLocation(details);

    wrapper.classList.remove('collapsed');
    wrapper.classList.add('expanded');
    wrapper.dataset.menuState = 'expanded';
    wrapper.setAttribute('aria-hidden', 'false');
    wrapper.style.display = 'block';

    menuIsOpen = true;

    if (wasOpen) {
        updateMenuLocationInfo(locationDetails);
    } else {
        // Only scroll to menu if shouldScroll is true
        if (shouldScroll) {
            ensureMenuSectionVisible(locationDetails);
        } else {
            // Just update location info without scrolling
            updateMenuLocationInfo(locationDetails);
            const { menuSection } = getMenuDomRefs();
            if (menuSection && menuSection.style.display !== 'block') {
                menuSection.style.display = 'block';
            }
        }
    }

    syncMenuToggleUI();
}

function closeMenuSection() {
    const wrapper = getMenuWrapperElement();

    if (!wrapper) {
        return;
    }

    if (!menuIsOpen) {
        syncMenuToggleUI();
        return;
    }

    wrapper.classList.add('collapsed');
    wrapper.classList.remove('expanded');
    wrapper.dataset.menuState = 'collapsed';
    wrapper.setAttribute('aria-hidden', 'true');
    wrapper.style.display = 'none';

    const { locationInfo } = getMenuDomRefs();
    if (locationInfo) {
        locationInfo.hidden = true;
        locationInfo.style.display = 'none';
    }

    menuIsOpen = false;
    clearActiveMenuButton();
    syncMenuToggleUI();
}

function toggleMenuSection(details) {
    if (menuIsOpen) {
        if (details) {
            openMenuSection(details);
        } else {
            closeMenuSection();
        }
    } else {
        openMenuSection(details);
    }
}

function ensureMenuSectionVisible(details) {
    const { menuSection } = getMenuDomRefs();

    if (!menuSection) {
        return;
    }

    if (menuSection.style.display !== 'block') {
        menuSection.style.display = 'block';
    }

    updateMenuLocationInfo(details);

    requestAnimationFrame(() => {
        smoothScrollTo(menuSection);
    });
}

function updateMenuLocationInfo(details) {
    const { locationInfo, locationName, locationAddress, locationPhone } = getMenuDomRefs();

    if (!locationInfo || !locationName || !locationAddress || !locationPhone) {
        return;
    }

    const locationDetails = resolveMenuLocation(details);

    locationName.textContent = `Ordering from: ${locationDetails.name}`;
    locationAddress.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${locationDetails.address}`;
    locationPhone.innerHTML = `<i class="fas fa-phone"></i> Call For Food Order: ${locationDetails.phone}`;
    locationInfo.hidden = false;
    locationInfo.style.display = 'block';
}

// ========================================
// Scroll Animation System
// ========================================

const scrollAnimationConfig = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

function initScrollAnimations() {
    // Check if Intersection Observer is supported
    if (!('IntersectionObserver' in window)) {
        // Fallback: show all elements immediately
        document.querySelectorAll('.scroll-animate').forEach(el => {
            el.classList.add('is-visible');
        });
        return;
    }

    const animatedElements = document.querySelectorAll('.scroll-animate');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when element comes into view
                entry.target.classList.add('is-visible');
                
                // Optional: stop observing after animation (performance optimization)
                // Uncomment if you want animations to trigger only once
                // observer.unobserve(entry.target);
            } else {
                // Remove class when element goes out of view (for re-triggering)
                // Comment out these lines if you want animation to happen only once
                entry.target.classList.remove('is-visible');
            }
        });
    }, scrollAnimationConfig);

    // Observe all elements with scroll-animate class
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Add animation classes to elements on page load
function setupScrollAnimations() {
    // Hero section elements
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('scroll-animate', 'fade-in-up');
    }

    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        heroVisual.classList.add('scroll-animate', 'fade-in-left');
    }

    // Location cards
    document.querySelectorAll('.location-card').forEach((card, index) => {
        card.classList.add('scroll-animate', 'fade-in-up');
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // About section elements
    const aboutImage = document.querySelector('.about-image');
    if (aboutImage) {
        aboutImage.classList.add('scroll-animate', 'fade-in-right');
    }

    const aboutText = document.querySelector('.about-text');
    if (aboutText) {
        aboutText.classList.add('scroll-animate', 'fade-in-up');
    }

    document.querySelectorAll('.feature').forEach((feature, index) => {
        feature.classList.add('scroll-animate', 'fade-in-up');
        feature.style.transitionDelay = `${index * 0.15}s`;
    });

    // Menu section
    const menuHero = document.querySelector('.menu-hero');
    if (menuHero) {
        menuHero.classList.add('scroll-animate', 'fade-in-up');
    }

    document.querySelectorAll('.menu-card').forEach((card, index) => {
        card.classList.add('scroll-animate', 'fade-in-up');
        card.style.transitionDelay = `${(index % 4) * 0.1}s`;
    });

    // Contact section
    const contactInfo = document.querySelector('.contact-info');
    if (contactInfo) {
        contactInfo.classList.add('scroll-animate', 'fade-in-left');
    }

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.classList.add('scroll-animate', 'fade-in-right');
    }

    // Section titles
    document.querySelectorAll('.section-title').forEach(title => {
        title.classList.add('scroll-animate', 'fade-in-down');
    });

    // Initialize the observer
    initScrollAnimations();
}

// ========================================
// Parallax Scroll Effect (Subtle)
// ========================================

function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.hero-visual, .about-image img');
    
    if (parallaxElements.length === 0) return;
    
    // Throttle scroll events for performance
    let ticking = false;
    
    function updateParallax() {
        parallaxElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
            
            // Only apply parallax when element is in viewport
            if (scrollPercent >= 0 && scrollPercent <= 1) {
                const translateY = (scrollPercent - 0.5) * 30; // Subtle movement
                element.style.transform = `translateY(${translateY}px)`;
            }
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
    
    // Initial call
    updateParallax();
}

// ========================================
// Smooth Reveal on Scroll for Menu Items
// ========================================

function initMenuScrollReveal() {
    const menuObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 50); // Stagger effect
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px'
    });

    // Observe menu cards when they're added
    const observeMenuCards = () => {
        const menuCards = document.querySelectorAll('.menu-card:not(.observed)');
        menuCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.classList.add('observed');
            menuObserver.observe(card);
        });
    };

    // Initial observation
    observeMenuCards();

    // Re-observe when menu changes (for dynamic content)
    const menuGallery = document.getElementById('menuGallery');
    if (menuGallery) {
        const galleryObserver = new MutationObserver(observeMenuCards);
        galleryObserver.observe(menuGallery, { childList: true });
    }
}

// Export for use in other files (Phase 2)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        smoothScrollTo,
        ensureMenuSectionVisible,
        getDefaultMenuLocation
    };
}