interface DeleteAccountPageProps {
  dark?: boolean
}

export default function DeleteAccountPage({ dark = false }: DeleteAccountPageProps) {
  return (
    <main
      className="flex min-h-[60vh] items-center justify-center px-6 py-20 text-center"
      style={{
        background: dark ? '#000000' : '#f8f6ff',
        color: dark ? '#f5f5f5' : '#1e1035',
      }}
    >
      <h1
        className="text-3xl font-bold md:text-4xl"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Delete your account
      </h1>
    </main>
  )
}
