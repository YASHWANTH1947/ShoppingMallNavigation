// Mall map data - This would typically come from a backend service
const mallMap = {
    fashion: {
        stores: [
            { 
                name: 'Fashion Zone', 
                floor: '1st Floor', 
                location: 'North Wing',
                offers: [
                    '50% off on selected items',
                    'Buy 2 Get 1 Free on all accessories'
                ]
            },
            { 
                name: 'Style Studio', 
                floor: '2nd Floor', 
                location: 'East Wing',
                offers: [
                    'End of Season Sale - Up to 70% off',
                    'Student Discount - 10% off'
                ]
            },
            { 
                name: 'Trendy Threads', 
                floor: '1st Floor', 
                location: 'South Wing',
                offers: [
                    'Clearance Sale - Everything must go!',
                    'Members get additional 15% off'
                ]
            }
        ]
    },
    electronics: {
        stores: [
            { 
                name: 'Tech Hub', 
                floor: '3rd Floor', 
                location: 'West Wing',
                offers: [
                    'Free screen protector with every phone purchase',
                    '2-year extended warranty on laptops'
                ]
            },
            { 
                name: 'Gadget World', 
                floor: '3rd Floor', 
                location: 'North Wing',
                offers: [
                    'Trade-in your old device - Get up to $500 off',
                    'Gaming accessories - 30% off'
                ]
            },
            { 
                name: 'Digital Dreams', 
                floor: '2nd Floor', 
                location: 'East Wing',
                offers: [
                    'Smart home devices - 20% off',
                    'Free installation on TVs above 55"'
                ]
            }
        ]
    },
    food: {
        stores: [
            { 
                name: 'Food Court', 
                floor: '4th Floor', 
                location: 'Central',
                offers: [
                    'Happy Hour 3-5 PM - 20% off all beverages',
                    'Family meal deals starting at $29.99'
                ]
            },
            { 
                name: 'Café Corner', 
                floor: '1st Floor', 
                location: 'South Wing',
                offers: [
                    'Buy one get one free on all pastries after 6 PM',
                    'Loyalty card - 10th coffee free'
                ]
            },
            { 
                name: 'Restaurant Row', 
                floor: '4th Floor', 
                location: 'North Wing',
                offers: [
                    'Early bird special - 15% off before noon',
                    'Weekend brunch buffet - $24.99'
                ]
            }
        ]
    },
    beauty: {
        stores: [
            { 
                name: 'Beauty Bar', 
                floor: '2nd Floor', 
                location: 'South Wing',
                offers: [
                    'Free makeover with $50 purchase',
                    'Buy 3 get 1 free on all skincare'
                ]
            },
            { 
                name: 'Cosmetics World', 
                floor: '1st Floor', 
                location: 'East Wing',
                offers: [
                    'Luxury brands - 25% off this week',
                    'Free gift with purchase over $75'
                ]
            },
            { 
                name: 'Spa & Wellness', 
                floor: '3rd Floor', 
                location: 'North Wing',
                offers: [
                    'First-time customer - 20% off any service',
                    'Package deals - Save up to 40%'
                ]
            }
        ]
    },
    entertainment: {
        stores: [
            { 
                name: 'Cinema Complex', 
                floor: '5th Floor', 
                location: 'West Wing',
                offers: [
                    'Tuesday special - All tickets $8',
                    'Student discount - 15% off'
                ]
            },
            { 
                name: 'Game Zone', 
                floor: '5th Floor', 
                location: 'East Wing',
                offers: [
                    '1 hour free on 2-hour gaming sessions',
                    'Monthly membership - 50% off'
                ]
            },
            { 
                name: 'Entertainment Center', 
                floor: '4th Floor', 
                location: 'South Wing',
                offers: [
                    'Family package - 4 people play for price of 3',
                    'Happy Hour gaming - 30% off 2-5 PM'
                ]
            }
        ]
    },
    home: {
        stores: [
            { 
                name: 'Home Decor', 
                floor: '3rd Floor', 
                location: 'South Wing',
                offers: [
                    'Clearance sale - Up to 60% off',
                    'Free delivery on orders over $500'
                ]
            },
            { 
                name: 'Furniture Gallery', 
                floor: '2nd Floor', 
                location: 'West Wing',
                offers: [
                    'Interest-free financing for 24 months',
                    'Floor models - 40% off'
                ]
            },
            { 
                name: 'Living Essentials', 
                floor: '1st Floor', 
                location: 'North Wing',
                offers: [
                    'Buy online, pick up in store - 10% off',
                    'Seasonal items - 25% off'
                ]
            }
        ]
    }
};

// Get all elements
const categoryCards = document.querySelectorAll('.category-card');
const floorCards = document.querySelectorAll('.floor-card');
const mallMapSection = document.getElementById('mallMap');
const categoriesSection = document.getElementById('categoriesSection');
const floorsSection = document.getElementById('floorsSection');
const navLinks = document.querySelectorAll('.nav-links a');

// Add click event listeners to all category cards
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        showMallMap(category);
        
        // Remove active class from all cards and add to clicked card
        categoryCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});

// Add click event listeners to all floor cards
floorCards.forEach(card => {
    card.addEventListener('click', () => {
        const floor = card.dataset.floor;
        showFloorStores(floor);
        
        // Remove active class from all cards and add to clicked card
        floorCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});

// Add click event listeners to navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const navType = link.dataset.nav;
        
        // Update active state
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Show appropriate section
        if (navType === 'home') {
            categoriesSection.style.display = 'block';
            floorsSection.style.display = 'none';
            mallMapSection.style.display = 'none';
        } else if (navType === 'floors') {
            categoriesSection.style.display = 'none';
            floorsSection.style.display = 'block';
            mallMapSection.style.display = 'none';
        }
    });
});

// Function to show mall map for selected category
function showMallMap(category) {
    const stores = mallMap[category].stores;
    
    // Create HTML for stores list
    const storesHTML = stores.map(store => `
        <div class="store-item">
            <h3>${store.name}</h3>
            <p><strong>Floor:</strong> ${store.floor}</p>
            <p><strong>Location:</strong> ${store.location}</p>
            <div class="offers-section">
                <h4>Current Offers:</h4>
                <ul>
                    ${store.offers.map(offer => `<li><i class="fas fa-tag"></i> ${offer}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');

    // Update mall map section
    mallMapSection.innerHTML = `
        <h2>${category.charAt(0).toUpperCase() + category.slice(1)} Stores</h2>
        <div class="stores-grid">
            ${storesHTML}
        </div>
    `;

    // Add styles for the new elements
    const style = document.createElement('style');
    style.textContent = `
        .stores-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .store-item {
            background: #f8f9fa;
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            transition: transform 0.2s ease;
        }

        .store-item:hover {
            transform: translateY(-5px);
        }

        .store-item h3 {
            color: #2c3e50;
            margin-bottom: 1rem;
            font-size: 1.3rem;
        }

        .store-item p {
            margin: 0.5rem 0;
            color: #666;
        }

        .offers-section {
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid #e9ecef;
        }

        .offers-section h4 {
            color: #e74c3c;
            margin-bottom: 0.5rem;
            font-size: 1.1rem;
        }

        .offers-section ul {
            list-style: none;
            padding: 0;
        }

        .offers-section li {
            margin: 0.5rem 0;
            color: #2c3e50;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .offers-section i {
            color: #e74c3c;
            font-size: 0.9rem;
        }
    `;
    document.head.appendChild(style);

    // Show the mall map section
    mallMapSection.style.display = 'block';

    // Smooth scroll to mall map section
    mallMapSection.scrollIntoView({ behavior: 'smooth' });
}

// Function to show stores on a specific floor
function showFloorStores(floor) {
    // Get all stores from all categories
    const allStores = Object.values(mallMap).flatMap(category => category.stores);
    
    // Filter stores for the selected floor
    const floorStores = allStores.filter(store => store.floor === `${floor}${getFloorSuffix(floor)} Floor`);
    
    // Create HTML for stores list
    const storesHTML = floorStores.map(store => `
        <div class="store-item">
            <h3>${store.name}</h3>
            <p><strong>Category:</strong> ${getCategoryForStore(store.name)}</p>
            <p><strong>Location:</strong> ${store.location}</p>
            <div class="offers-section">
                <h4>Current Offers:</h4>
                <ul>
                    ${store.offers.map(offer => `<li><i class="fas fa-tag"></i> ${offer}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');

    // Update mall map section
    mallMapSection.innerHTML = `
        <h2>Stores on ${floor}${getFloorSuffix(floor)} Floor</h2>
        <div class="stores-grid">
            ${storesHTML}
        </div>
    `;

    // Show the mall map section
    mallMapSection.style.display = 'block';

    // Smooth scroll to mall map section
    mallMapSection.scrollIntoView({ behavior: 'smooth' });
}

// Helper function to get floor suffix (st, nd, rd, th)
function getFloorSuffix(floor) {
    if (floor === '1') return 'st';
    if (floor === '2') return 'nd';
    if (floor === '3') return 'rd';
    return 'th';
}

// Helper function to get category for a store
function getCategoryForStore(storeName) {
    for (const [category, data] of Object.entries(mallMap)) {
        if (data.stores.some(store => store.name === storeName)) {
            return category.charAt(0).toUpperCase() + category.slice(1);
        }
    }
    return 'Unknown';
}

// Add active class to Home link initially
document.querySelector('.nav-links a.active').classList.add('active'); 