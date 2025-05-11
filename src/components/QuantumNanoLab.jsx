import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function QuantumNanoLab() {
  const people = [
    { name: "Prof. M. Aslam", role: "Principal Investigator", email: "aslam@phy.iitb.ac.in", photo: "https://www.phy.iitb.ac.in/sites/www.phy.iitb.ac.in/files/employees/M%20ASLAM_0.jpg" },
    { name: "Dr. Junais", role: "Postdoctoral Fellow", email: "abcd@example.com", photo: "https://via.placeholder.com/150" },
    { name: "Dr. Veena", role: "Postdoctoral Fellow", email: "efgh@example.com", photo: "https://via.placeholder.com/150" },
    { name: "Raju", role: "PhD Student", email: "xyz@example.com", photo: "https://via.placeholder.com/150" },
    { name: "Azad", role: "PhD Student", email: "azad.alli@iitb.ac.in", photo: "https://via.placeholder.com/150" },
    { name: "Tejus", role: "MSc Student", email: "tejus@example.com", photo: "https://via.placeholder.com/150" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6 space-y-12">
      {/* Header */}
      <header className="text-center space-y-4">
        <img src="/logo.png" alt="Lab Logo" className="mx-auto" width="150" height="50" loading="lazy" />
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          Quantum and Nanomaterials Research Lab – IIT Bombay
        </motion.h1>
        <p className="text-lg text-gray-600">
          Exploring functional nanomaterials for energy, sensors, and quantum applications
        </p>
      </header>

      {/* Lab Image Section */}
      <section className="relative w-screen overflow-hidden h-[60vh]">
        <img
          src="/lab.jpg"
          alt="Lab"
          className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out will-change-transform"
        />
      </section>

      {/* About Section */}
      <section className="grid grid-cols-1 md:grid-cols-1 gap-6 items-center">
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">About Us</h2>
            <p>
              The Quantum and Nanomaterials Research Lab, led by <strong>Prof. M. Aslam</strong> at IIT Bombay,
              investigates functional nanomaterials with a focus on energy, sensing, and biomedical applications.
              Research spans earth-abundant compounds like oxides and CZTS for photovoltaics, graphene-based materials
              for energy storage and water splitting, organic perovskites for optoelectronics, and magnetic nanoparticles
              for biomedical imaging. <strong>Emerging directions include exploring quantum phenomena in low-dimensional materials.</strong>
            </p>
          </CardContent>
        </Card>
      </section>

      {/* People Section */}
      <section className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-center"
        >
          People
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {people.map((person, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center p-6 space-y-4">
                <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg">
                  <img src={person.photo} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-xl font-semibold text-gray-800">{person.name}</div>
                <div className="text-gray-500 text-sm">{person.role}</div>
                {person.email && (
                  <a href={`mailto:${person.email}`} className="text-blue-500 text-xs hover:underline">
                    {person.email}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Research Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Research</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Oxides and earth-abundant compounds (CZTS) for photovoltaic applications</li>
          <li>Graphene and graphene-like semiconductors for water splitting, photosensing, and energy storage</li>
          <li>Organic perovskites: Nanoparticle fabrication, stabilization, and thin-film formalisms</li>
          <li>Magnetic nanoparticles: MRI imaging and GMR applications</li>
        </ul>
      </section>

      {/* Publications Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Publications</h2>
        <p>
          View our publications on{" "}
          <a className="text-blue-600 underline" href="https://scholar.google.co.in/citations?user=S0PEM8sAAAAJ&hl=en">
            Google Scholar
          </a>.
        </p>
      </section>

      {/* Join Us Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Join Us</h2>
        <p>
          We welcome highly motivated researchers and students to join our team. Reach out to us at{" "}
          <strong>aslam@phy.iitb.ac.in</strong> with your CV and a brief statement of interest.
        </p>
      </section>

      {/* Contact Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p>Quantum and Nanomaterials Research Lab, Department of Physics</p>
        <p>IIT Bombay, Powai, Mumbai, Maharashtra 400076, India</p>
        <p>
          Email:{" "}
          <a className="text-blue-600 underline" href="mailto:aslam@phy.iitb.ac.in">
            aslam@phy.iitb.ac.in
          </a>
        </p>
        <p>
          Facebook:{" "}
          <a className="text-blue-600 underline" href="https://www.facebook.com/nanomaterialslab/">
            @nanomaterialslab
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 pt-8">
        © 2025 Quantum and Nanomaterials Research Lab – IIT Bombay. All rights reserved.
      </footer>
    </div>
  );
}
