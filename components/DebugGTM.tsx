'use client'

export default function DebugGTM() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID
  
  if (!gtmId) {
    return (
      <div style={{ 
        position: 'fixed', 
        top: '10px', 
        right: '10px', 
        background: 'red', 
        color: 'white', 
        padding: '10px', 
        fontSize: '12px',
        zIndex: 9999
      }}>
        GTM ID Missing: {gtmId || 'undefined'}
      </div>
    )
  }
  
  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: 'green', 
      color: 'white', 
      padding: '10px', 
      fontSize: '12px',
      zIndex: 9999
    }}>
      GTM ID: {gtmId}
    </div>
  )
}
