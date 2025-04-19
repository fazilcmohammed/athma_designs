import React, { useState } from 'react'
import KmHeroSection from '../../components/KmComponents/KmHeroSection'
import { careers } from '../../assets/constant'
import { toast } from "react-toastify";

const Careers = () => {

    const [resume, setResume] = useState(null);
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "3614e9bd-999a-4594-8cf7-c2351eceedf2");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Form Submitted Successfully")
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message)
            setResult(data.message);
        }
    };

    const handleResumeUpload = (e) => {
        setResume(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted");
    };

    return (
        <>
            <KmHeroSection heroSection={careers[0]} />
            <section className="container mx-auto px-6 py-12">
                <div className="max-w-3xl mx-auto">
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify">
                        Techpappa is deeply committed to its team, providing a stimulating and rewarding environment where employees can excel and advance. The dedication, skills, and passion our team members bring, coupled with their belief in our vision, have been the cornerstone of our success over the past thirty years. We invite individuals eager to be at the forefront of technological innovation, where hard work and achievements are recognized and rewarded, to become part of our dynamic organization.
                    </p>

                    <div className="text-center text-gray-900 mt-10">
                        <h1 className="text-3xl font-bold mb-6">Tell Us About Yourself</h1>
                        <div className="p-6 bg-white shadow rounded">
                            <form onSubmit={onSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <input
                                        type="text"
                                        placeholder="Name *"
                                        className="border rounded px-4 py-2 w-full focus:outline-none"
                                        required
                                        name="name"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email *"
                                        className="border rounded px-4 py-2 w-full focus:outline-none"
                                        required
                                        name="email"
                                    />
                                </div>

                                <select
                                    className="border rounded px-4 py-2 w-full focus:outline-none"
                                    required name='vacancy'
                                >
                                    <option value="">Select Vacancy *</option>
                                    <option value="sales">Sales Coordinator</option>
                                    <option value="it support">IT Support Engineer</option>
                                    <option value="business development">Business Development Manager</option>
                                    <option value="cyber security">Cyber Security Specialist</option>
                                    <option value="cloud engineer">Cloud Support Engineer</option>
                                </select>

                                <div className="flex items-center gap-4">
                                    <input
                                        type="file"
                                        onChange={handleResumeUpload}
                                        className="border rounded px-3 py-2 w-full"
                                        required
                                        name='attachment'
                                    />
                                    <button
                                        type="button"
                                        className="bg-primaryBlue text-white px-4 py-2 rounded"
                                    >
                                        Upload
                                    </button>
                                </div>

                                <textarea
                                    placeholder="Message *"
                                    rows="4"
                                    className="border rounded px-4 py-2 w-full focus:outline-none"
                                    required
                                    name='message'
                                ></textarea>



                                <button
                                    type="submit"
                                    className="bg-primaryBlue text-white px-6 py-2 rounded"
                                >
                                    {result ? result : "SUBMIT"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Careers