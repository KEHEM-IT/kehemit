// composables/useCursor.ts
import { ref, onMounted, onUnmounted } from 'vue'

interface TailSegment {
    x: number
    y: number
    opacity: number
    scale: number
}

export const useCursor = () => {
    const cursorX = ref(0)
    const cursorY = ref(0)
    const cursorDotX = ref(0)
    const cursorDotY = ref(0)
    const isPointer = ref(false)
    const isHidden = ref(false)
    const tailSegments = ref<TailSegment[]>([])
    const isTouchDevice = ref(false)

    let rafId: number | null = null
    const TAIL_LENGTH = 6
    const TAIL_SPEED = 0.3

    // Initialize tail segments
    const initTail = () => {
        tailSegments.value = Array.from({ length: TAIL_LENGTH }, (_, i) => ({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            opacity: 1 - (i / TAIL_LENGTH) * 0.8,
            scale: 1 - (i / TAIL_LENGTH) * 0.5
        }))
    }

    const updateTail = () => {
        // Update tail segments to follow each other
        for (let i = tailSegments.value.length - 1; i > 0; i--) {
            const current = tailSegments.value[i]
            const target = tailSegments.value[i - 1]

            current.x += (target.x - current.x) * TAIL_SPEED
            current.y += (target.y - current.y) * TAIL_SPEED
        }

        // First segment follows the cursor dot
        if (tailSegments.value.length > 0) {
            tailSegments.value[0].x += (cursorDotX.value - tailSegments.value[0].x) * TAIL_SPEED
            tailSegments.value[0].y += (cursorDotY.value - tailSegments.value[0].y) * TAIL_SPEED
        }
    }

    const animate = () => {
        cursorDotX.value += (cursorX.value - cursorDotX.value) * 0.15
        cursorDotY.value += (cursorY.value - cursorDotY.value) * 0.15

        updateTail()

        rafId = requestAnimationFrame(animate)
    }

    const updateCursor = (e: MouseEvent) => {
        cursorX.value = e.clientX
        cursorY.value = e.clientY
        isHidden.value = false
    }

    // Touch event handlers
    const updateCursorTouch = (e: TouchEvent) => {
        if (e.touches.length > 0) {
            const touch = e.touches[0]
            cursorX.value = touch.clientX
            cursorY.value = touch.clientY
            isHidden.value = false
        }
    }

    const handleTouchStart = (e: TouchEvent) => {
        isTouchDevice.value = true
        updateCursorTouch(e)
    }

    const handleTouchMove = (e: TouchEvent) => {
        e.preventDefault() // Prevent scrolling while dragging
        updateCursorTouch(e)
    }

    const handleTouchEnd = () => {
        // Optionally hide cursor after touch ends
        // isHidden.value = true
    }

    const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        const clickable = target.closest('a, button, input, textarea, select, [role="button"]')
        isPointer.value = !!clickable
    }

    const handleMouseLeave = () => {
        if (!isTouchDevice.value) {
            isHidden.value = true
        }
    }

    const handleMouseEnter = () => {
        isHidden.value = false
    }

    onMounted(() => {
        cursorDotX.value = window.innerWidth / 2
        cursorDotY.value = window.innerHeight / 2

        // Detect if it's a touch device
        isTouchDevice.value = 'ontouchstart' in window || navigator.maxTouchPoints > 0

        initTail()

        // Mouse events
        document.addEventListener('mousemove', updateCursor)
        document.addEventListener('mouseover', handleMouseOver)
        document.addEventListener('mouseleave', handleMouseLeave)
        document.addEventListener('mouseenter', handleMouseEnter)

        // Touch events
        document.addEventListener('touchstart', handleTouchStart, { passive: false })
        document.addEventListener('touchmove', handleTouchMove, { passive: false })
        document.addEventListener('touchend', handleTouchEnd)

        // Hide default cursor
        document.body.style.cursor = 'none'

        // Start animation loop
        animate()
    })

    onUnmounted(() => {
        // Remove mouse event listeners
        document.removeEventListener('mousemove', updateCursor)
        document.removeEventListener('mouseover', handleMouseOver)
        document.removeEventListener('mouseleave', handleMouseLeave)
        document.removeEventListener('mouseenter', handleMouseEnter)

        // Remove touch event listeners
        document.removeEventListener('touchstart', handleTouchStart)
        document.removeEventListener('touchmove', handleTouchMove)
        document.removeEventListener('touchend', handleTouchEnd)

        if (rafId) cancelAnimationFrame(rafId)

        // Restore default cursor
        document.body.style.cursor = ''
    })

    return {
        cursorX,
        cursorY,
        cursorDotX,
        cursorDotY,
        isPointer,
        isHidden,
        tailSegments,
        isTouchDevice
    }
}