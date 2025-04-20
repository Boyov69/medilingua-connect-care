
const Contact = () => (
  <main className="min-h-screen pt-32 bg-gradient-to-br from-rose-50 via-sky-50 to-indigo-50">
    <div className="container mx-auto max-w-xl px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent text-center">
        Contact MediLingua
      </h2>
      <p className="mb-6 text-muted-foreground text-center">
        Have a question or want to reach out? Fill in the form and we'll get back to you!
      </p>
      <form className="bg-white/90 rounded-xl shadow-lg p-8 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your name"
          className="border px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
          required
        />
        <input
          type="email"
          placeholder="Your email"
          className="border px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
          required
        />
        <textarea
          placeholder="Your message"
          rows={4}
          className="border px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
          required
        />
        <button
          type="submit"
          className="mt-2 bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-600/90 text-white px-5 py-2 rounded-full font-semibold shadow-md transition-colors"
        >
          Send message
        </button>
      </form>
    </div>
  </main>
);

export default Contact;
