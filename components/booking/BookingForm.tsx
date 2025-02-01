const BookingForm = () => (
    <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold">Contact Details</h2>
        <form>
            {/* Contact Information */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm">First Name</label>
                    <input type="text" className="border p-2 w-full mt-2 rounded" />
                </div>
                <div>
                    <label className="block text-sm">Last Name</label>
                    <input type="text" className="border p-2 w-full mt-2 rounded" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <label className="block text-sm">Email</label>
                    <input type="email" className="border p-2 w-full mt-2 rounded" />
                </div>
                <div>
                    <label className="block text-sm">Phone Number</label>
                    <input type="text" className="border p-2 w-full mt-2 rounded" />
                </div>
            </div>

            {/* Payment Information */}
            <h2 className="text-xl font-semibold mt-6">Payment Information</h2>
            <div className="mt-4">
                <label className="block text-sm">Card Number</label>
                <input type="text" className="border p-2 w-full mt-2 rounded" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <label className="block text-sm">Expiration Date</label>
                    <input type="text" className="border p-2 w-full mt-2 rounded" />
                </div>
                <div>
                    <label className="block text-sm">CVV</label>
                    <input type="text" className="border p-2 w-full mt-2 rounded" />
                </div>
            </div>

            {/* Billing Address */}
            <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
            <div className="mt-4">
                <label className="block text-sm">Street Address</label>
                <input type="text" className="border p-2 w-full mt-2 rounded" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <label className="block text-sm">City</label>
                    <input type="text" className="border p-2 w-full mt-2 rounded" />
                </div>
                <div>
                    <label className="block text-sm">State</label>
                    <input type="text" className="border p-2 w-full mt-2 rounded" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <label className="block text-sm">Zip Code</label>
                    <input type="text" className="border p-2 w-full mt-2 rounded" />
                </div>
                <div>
                    <label className="block text-sm">Country</label>
                    <input type="text" className="border p-2 w-full mt-2 rounded" />
                </div>
            </div>

            <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full">
                Confirm & Pay
            </button>
        </form>
    </div>
);

export default BookingForm;