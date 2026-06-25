import { useForm, usePage } from '@inertiajs/react';

interface Props {
    flash: {
        success?: string;
    };
}

export default function ContactForm() {
    const { flash } = usePage<Props>().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post('/ContactForm', {
            onSuccess: () => reset(),
        });
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-8 sm:p-10 w-full max-w-lg shadow-xl">

                <h1 className="text-3xl font-bold text-slate-900 mb-2">
                    Kontak Kami
                </h1>
                <p className="text-gray-500 mb-8">
                    Lengkapi formulir di bawah ini dan kirimkan pesan Anda kepada kami.
                </p>

                {flash?.success && (
                    <div className="bg-green-100 border border-green-400 text-green-700 rounded-lg p-3 mb-6">
                        {flash.success}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">

                    <div>
                        <label className="block text-slate-800 font-semibold mb-2">
                            Nama
                        </label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-slate-900 transition-colors"
                            placeholder="Masukkan Nama"
                        />
                        {errors.name && (
                            <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>
                        )}
                    </div>

                    <div>
                        <label className="block text-slate-800 font-semibold mb-2">
                            Alamat Email
                        </label>
                        <input
                            type="email"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-slate-900 transition-colors"
                            placeholder="Masukkan Email"
                        />
                        {errors.email && (
                            <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>
                        )}
                    </div>

                    <div>
                        <label className="block text-slate-800 font-semibold mb-2">
                            Nomor Telepon
                        </label>
                        <input
                            type="tel"
                            value={data.phone}
                            onChange={e => setData('phone', e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-slate-900 transition-colors"
                            placeholder="Masukkan Nomor Telepon"
                        />
                        {errors.phone && (
                            <span className="text-red-500 text-xs mt-1 block">{errors.phone}</span>
                        )}
                    </div>

                    <div>
                        <label className="block text-slate-800 font-semibold mb-2">
                            Pesan
                        </label>
                        <textarea
                            value={data.message}
                            onChange={e => setData('message', e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-slate-900 transition-colors resize-none"
                            placeholder="Tuliskan Pesan"
                            rows={4}
                        />
                        {errors.message && (
                            <span className="text-red-500 text-xs mt-1 block">{errors.message}</span>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white font-semibold rounded-lg px-6 py-3 transition-colors"
                    >
                        {processing ? 'Sending...' : 'Submit'}
                    </button>

                </form>
            </div>
        </div>
    );
}
