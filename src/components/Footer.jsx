function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm md:text-base">© {new Date().getFullYear()} Tom Zhang. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;