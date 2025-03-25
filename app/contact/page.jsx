export default function Contact() {
    return (
      <div className="p-10">
        <h2 className="text-3xl font-semibold text-blue-600">Hubungi Kami</h2>
        <p className="mt-4">Email: contact@company.com</p>
        <p>Telepon: 0812-3456-7890</p>
        <a
          href="https://wa.me/6281234567890"
          className="mt-4 inline-block bg-green-500 text-white px-6 py-3 rounded-lg"
        >
          Chat via WhatsApp
        </a>
      </div>
    );
  }
  