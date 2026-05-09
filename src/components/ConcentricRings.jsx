import { motion } from 'framer-motion'

export default function ConcentricRings({
  count = 4,
  baseSize = 480,
  gap = 220,
  color = 'rgba(255,255,255,0.05)',
  style = {},
}) {
  const last = baseSize + (count - 1) * gap
  return (
    <div className="rings" style={{ width: last, height: last, ...style }} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => {
        const size = baseSize + i * gap
        return (
          <motion.div
            key={i}
            className="ring"
            style={{ width: size, height: size, borderColor: color }}
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: [0.98, 1.02, 0.98], opacity: [0.6, 0.9, 0.6] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.8,
            }}
          />
        )
      })}
    </div>
  )
}
