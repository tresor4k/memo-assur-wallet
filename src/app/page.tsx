'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Scan, Smartphone, Shield, Zap, ArrowRight } from 'lucide-react';

export default function Home() {
  4const [isScanning, setIsScanning] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsScanning(true);
      // Simulation du scan
      setTimeout(() => {
        setIsScanning(false);
        alert('★️ Scan réussi ! Fonctionnalité complète à venir');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 to-primary-800">
      {/* Hero Section */}
      <section className="px-4 py-20 text-center">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1> className="text-5xl md:text-7xl font-bold text-white mb-6">
              Mémo-Assur <span className="text-accent-400">Wallet</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto">
              La première app universelle qui transforme vos mémos d'assurance en passes Apple/Google Wallet en 10 secondes
            </p>
          </motion.div>

          {/* Upload Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <div className="relative">
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="relative block border-2 border-dashed rounded-3xl p-16 text-center cursor-pointer transition-all duration-300 transform hover:scale-105 border-white/30 bg-white/10 hover:border-accent-400 hover:bg-white/20 backdrop-blur-lg"
              >
                <div className="flex flex-col items-center space-y-8">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center shadow-2xl">
                      {isScanning ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <Scan className="w-16 h-16 text-white" />
                        </motion.div>
                      ) : (
                        <Upload className="w-16 h-16 text-white" />
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {isScanning ? 'Analyse en cours...' : 'Glissez votre mémo ici'}
                    </h3>
                    <p className="text-white/70 text-xl">
                      {isScanning ? 'Extraction des données d\'assurance' : 'ou cliquez pour sélectionner un fichier'}
                    </p>
                    <p className="text-sm text-white/50 mt-4">
                      PDF, JPG, PNG • Max 10MB
                    </p>
                  </div>
                </div>
              </label>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl hover:shadow-accent-500/25 transition-all duration-300 inline-flex items-center space-x-3"
            >
              <span>Commencer gratuitement</span>
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pourquoi choisir <span className="text-accent-400">Mémo-Assur</span> ?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="w-8 h-8" />, title: "Instantané", description: "Scan PDF → Wallet en 10 secondes" },
              { icon: <Shield className="w-8 h-8" />, title: "Universel", description: "Compatible avec tous les assureurs français" },
              { icon: <Smartphone className="w-8 h-8" />, title: "Multi-plateforme", description: "Apple Wallet, Google Wallet et accès web" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
