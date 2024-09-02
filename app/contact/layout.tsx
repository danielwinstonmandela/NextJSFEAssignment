export default function RootLayout({
    children,
}: Readonly <{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex">
            <aside className="bg-gray-500 h-screen p-8">
                <p>invoices</p>
                <p>customers</p>
            </aside>
            {children}
        </div>
    );
}


