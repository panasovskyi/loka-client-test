import Link from 'next/link';

export default function saved() {
  return (
    <div>
      <div className='container'>
        No content. Return home? <br />
        <Link href="/" style={{ color: 'white' }}>Yes</Link>

       
      </div>
   </div>
  )
}