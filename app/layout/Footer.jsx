import React from 'react'

export default function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.container}`}>
        FOOTER
      </div>
    </footer>
  )
}

const styles = {
  footer: 'px-4 sm:px-8 md:px-14 lg:px-32 py-6',
  container: 'max-w-[1240px]'
}