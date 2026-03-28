/**
 * Bustin' Chops - Main JavaScript
 * 
 * Features:
 * - 3D tilt + translate (up/down movement)
 * - Mouse following effect
 * - Swing animation on load
 * 
 * @author Michelle
 * @version 2.1.0
 */

(function() {
    'use strict';

    // ============================================
    // CONFIGURATION
    // ============================================
    const CONFIG = {
        // For floating product images (sliced biltong & droewors)
        products: {
            maxRotateX: 20,         // Tilt forward/back
            maxRotateY: 25,         // Tilt left/right
            maxRotateZ: 8,          // Twist
            maxTranslateY: 15,      // Move up/down (pixels)
            maxTranslateX: 10,      // Move left/right (pixels)
            perspective: 1000,
            scale: 1.05
        },
        // For hanging biltong in header
        hanging: {
            maxRotateX: 12,         // Tilt forward/back
            maxRotateY: 15,         // Tilt left/right  
            maxRotateZ: 6,          // Twist/sway
            maxTranslateY: 8,       // Move up/down
            perspective: 800
        }
    };

    // ============================================
    // DOM ELEMENTS
    // ============================================
    const floatingProducts = document.querySelectorAll('.floating-product');
    const hangingBiltongs = document.querySelectorAll('.hanging-biltong');

    // Track if animations are done
    let animationsComplete = false;

    // ============================================
    // MOUSE TRACKING FOR ALL ELEMENTS
    // ============================================
    
    function initMouseTracking() {
        document.addEventListener('mousemove', (e) => {
            // Get mouse position relative to viewport center
            const mouseX = (e.clientX / window.innerWidth) * 2 - 1;  // -1 to 1
            const mouseY = (e.clientY / window.innerHeight) * 2 - 1; // -1 to 1

            // Update floating product images
            floatingProducts.forEach((product, index) => {
                const img = product.querySelector('img');
                if (!img) return;

                // Check if directly hovering
                const isHovered = product.matches(':hover');
                
                if (isHovered) {
                    // Direct hover - more intense effect based on mouse position within element
                    const rect = product.getBoundingClientRect();
                    const localX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
                    const localY = ((e.clientY - rect.top) / rect.height) * 2 - 1;

                    const rotateX = localY * -CONFIG.products.maxRotateX;
                    const rotateY = localX * CONFIG.products.maxRotateY;
                    const rotateZ = (localX * localY) * CONFIG.products.maxRotateZ;
                    const translateY = localY * -CONFIG.products.maxTranslateY;
                    const translateX = localX * CONFIG.products.maxTranslateX;

                    img.style.transform = `
                        perspective(${CONFIG.products.perspective}px)
                        translateX(${translateX}px)
                        translateY(${translateY}px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        rotateZ(${rotateZ}deg)
                        scale3d(${CONFIG.products.scale}, ${CONFIG.products.scale}, ${CONFIG.products.scale})
                    `;
                } else {
                    // Global tracking - subtle following effect
                    const direction = index === 0 ? 1 : -1;
                    
                    const rotateX = mouseY * -CONFIG.products.maxRotateX * 0.4;
                    const rotateY = mouseX * CONFIG.products.maxRotateY * 0.5 * direction;
                    const rotateZ = (mouseX * mouseY) * CONFIG.products.maxRotateZ * 0.5;
                    const translateY = mouseY * CONFIG.products.maxTranslateY * 0.5;
                    const translateX = mouseX * CONFIG.products.maxTranslateX * 0.3 * direction;

                    img.style.transform = `
                        perspective(${CONFIG.products.perspective}px)
                        translateX(${translateX}px)
                        translateY(${translateY}px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        rotateZ(${rotateZ}deg)
                    `;
                }
            });

            // Update hanging biltong (only after swing animation)
            if (animationsComplete) {
                hangingBiltongs.forEach((biltong, index) => {
                    const isMirrored = biltong.classList.contains('mirrored');
                    const direction = isMirrored ? -1 : 1;

                    // Calculate rotations - tilt toward mouse
                    const rotateX = mouseY * CONFIG.hanging.maxRotateX;
                    const rotateY = mouseX * CONFIG.hanging.maxRotateY * direction;
                    const rotateZ = (mouseX * direction) * CONFIG.hanging.maxRotateZ;
                    const translateY = mouseY * CONFIG.hanging.maxTranslateY;

                    // Build transform (preserve scaleX for mirrored)
                    const scaleTransform = isMirrored ? 'scaleX(-1)' : '';

                    biltong.style.transform = `
                        ${scaleTransform}
                        perspective(${CONFIG.hanging.perspective}px)
                        translateY(${translateY}px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        rotateZ(${rotateZ}deg)
                    `;
                });
            }
        });

        // Reset on mouse leave
        document.addEventListener('mouseleave', () => {
            floatingProducts.forEach(product => {
                const img = product.querySelector('img');
                if (img) {
                    img.style.transform = `
                        perspective(${CONFIG.products.perspective}px)
                        translateX(0px)
                        translateY(0px)
                        rotateX(0deg)
                        rotateY(0deg)
                        rotateZ(0deg)
                    `;
                }
            });

            if (animationsComplete) {
                hangingBiltongs.forEach(biltong => {
                    const isMirrored = biltong.classList.contains('mirrored');
                    const scaleTransform = isMirrored ? 'scaleX(-1)' : '';
                    biltong.style.transform = `${scaleTransform} rotate(0deg)`;
                });
            }
        });
    }

    // ============================================
    // SET UP TRANSITIONS AFTER ANIMATIONS
    // ============================================
    
    function initAfterAnimations() {
        // Wait for swing animation to complete (1.8s)
        setTimeout(() => {
            animationsComplete = true;

            // Add smooth transitions to hanging biltong
            hangingBiltongs.forEach(biltong => {
                biltong.style.transition = 'transform 0.15s ease-out';
            });

            // Add transitions to product images
            floatingProducts.forEach(product => {
                const img = product.querySelector('img');
                if (img) {
                    img.style.transition = 'transform 0.1s ease-out';
                    img.style.transformStyle = 'preserve-3d';
                }
            });

            console.log('Animations complete - mouse tracking active');
        }, 2000);
    }

    // ============================================
    // INITIALIZATION
    // ============================================
    
    function init() {
        // Check for reduced motion preference
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            console.log('Reduced motion preferred - skipping animations');
            return;
        }

        initMouseTracking();
        initAfterAnimations();

        console.log('Bustin\' Chops JS v2.1 initialized');
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
