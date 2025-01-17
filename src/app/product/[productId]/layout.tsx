
  
  export default function ProductLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div style={{ border: '1px solid yellow',padding: '2px', margin: '2px'}}>
          <div style={{ border: '1px solid red',padding: '2px' }}>Product Id layout</div>
          {children}
        </div>
    )
  }
  