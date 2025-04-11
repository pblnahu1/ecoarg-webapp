interface FooterContentProps {
    darkMode: boolean;
  }

const Footer = ({darkMode}: FooterContentProps) => {

  return (
    <footer
        className={`px-6 py-4 ${
          darkMode ? 'text-gray-400' : ' text-gray-500'
        } mt-auto`}
      >
        <div className="max-w-7xl mx-auto text-center text-sm">
          © {new Date().getFullYear()} EcoARG. Todos los derechos reservados.
        </div>
      </footer>
  )
}

export default Footer
