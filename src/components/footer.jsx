import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center flex-wrap">
          <div className="text-sm">
            &copy; Copyright <strong>Akeshya</strong>. All Rights Reserved
          </div>
          <div>
            <ul className="flex list-none space-x-6">
              <li>
                <Link href="https://akeshya.com/Terms%20and%20conditions.pdf" className="hover:underline">
                  Terms and conditions
                </Link>
              </li>
              <li>
                <Link href="https://akeshya.com/Refund%20policy.pdf" className="hover:underline">
                  Refund policy
                </Link>
              </li>
              <li>
                <Link href="https://akeshya.com/Privacy%20policy.pdf" className="hover:underline">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
