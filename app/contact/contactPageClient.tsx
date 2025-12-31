'use client';
export default function AboutPage() {
    function search(formData: FormData) {
        const query = formData.get("First Name");
        alert(`You searched for '${query}'`);
    }
  return (
    <main>
        <div className='topMain'>
            <h1 className="headingFont text-5xl mb-6 animate-fade-inY p-40">
                Want to Commission or Have any Questions?
            </h1>
        </div>
        <div className="max-w-2xl mx-auto p-10 animate-fade-inY bg-blue-950/50 from-gray rounded-xl">
            <h2 className="text-white text-center p-5 bodyFont">
                For commissions, please submit your info
            </h2>
            <form action={search} className="flex flex-col gap-4">
                <input 
                    name="First Name" 
                    className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600"
                    placeholder="First Name"
                />
                <input 
                    name="Last Name" 
                    className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600"
                    placeholder="Last Name"
                />
                <input 
                    name="Email" 
                    className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600"
                    placeholder="Email"
                />
                <textarea 
                    name="Commission Description" 
                    className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 h-32 align-top resize-none"
                    placeholder="Commission Description"
                />
                <button 
                    type="submit"
                    className="px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-lg"
                >
                    Search
                </button>
            </form>
        </div>

        <div className="p-35"></div>
    </main>
  )
}