import React from 'react';

const RequestDemo = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-center">
                <div className="demo-form w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
                    <div className="demo-bg mb-6">
                        <div className="form-header text-center">
                            <h2 className="text-3xl font-semibold text-[#E32134]">Request a Demo / Callback</h2>
                            <p className="text-gray-600 mt-4">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas accusantium doloribus perferendis harum facere fuga ad voluptatem sunt tempora eius! Nobis, alias dolor eum suscipit amet repellat animi explicabo quae.
                            </p>
                        </div>
                    </div>
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="form-group">
                                <label className="form-label text-sm text-gray-700" htmlFor="first-name">First Name</label>
                                <input
                                    className="form-control w-full p-3 border border-gray-300 rounded-md"
                                    type="text"
                                    id="first-name"
                                    required
                                    placeholder="John"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label text-sm text-gray-700" htmlFor="last-name">Last Name</label>
                                <input
                                    className="form-control w-full p-3 border border-gray-300 rounded-md"
                                    type="text"
                                    id="last-name"
                                    required
                                    placeholder="Doe"
                                />
                            </div>
                        </div>
                        <div className="form-group mb-6">
                            <label className="form-label text-sm text-gray-700" htmlFor="email">Email Address</label>
                            <input
                                className="form-control w-full p-3 border border-gray-300 rounded-md"
                                type="email"
                                id="email"
                                required
                                placeholder="john@doe.com"
                            />
                        </div>
                        <div className="form-group mb-6">
                            <label className="form-label text-sm text-gray-700" htmlFor="phone">Phone No</label>
                            <input
                                className="form-control w-full p-3 border border-gray-300 rounded-md"
                                type="tel"
                                id="phone"
                                required
                                placeholder="980-456-7890"
                            />
                        </div>
                        <div className="form-group mb-6">
                            <label className="form-label text-sm text-gray-700" htmlFor="model">Model</label>
                            <select className="form-control w-full p-3 border border-gray-300 rounded-md" id="model" required>
                                <option value="" disabled selected>Select model</option>
                                <option value="1">Truck 1</option>
                                <option value="2">Truck 2</option>
                                <option value="3">Truck 3</option>
                                <option value="4">Truck 4</option>
                                <option value="5">Truck 5</option>
                            </select>
                        </div>
                        <div className="form-btn text-center">
                            <button className="submit-btn bg-[#E32134] text-white py-3 px-6 rounded-md w-full mt-4 hover:bg-[#c01a28]">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RequestDemo;
