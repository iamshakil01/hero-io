import React from "react";
import Logo from "../Logo/Logo";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content">
      {/* Top section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-y-12 gap-x-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <span
          to="/"
          className="btn btn-ghost normal-case text-2xl font-bold text-green-600"
        >
          <Logo />
        </span>
            <p className="text-sm leading-relaxed text-base-content/70 max-w-xs">
              We build thoughtfully designed digital products that help
              businesses move faster, work smarter, and grow sustainably.
            </p>
          </div>

          {/* Product */}
          <div className="flex flex-col space-y-3">
            <h3 className="footer-title opacity-100">Products</h3>
            <a className="link link-hover">Features</a>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Integrations</a>
          </div>

          {/* Company */}
          <div className="flex flex-col space-y-3">
            <h3 className="footer-title opacity-100">Company</h3>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Blog</a>
          </div>

          {/* Resources */}
          <div className="flex flex-col space-y-3">
            <a className="link link-hover">Help Center</a>
            <a className="link link-hover">Docs</a>
            <a className="link link-hover">Contact</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-base-300">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-sm text-base-content/60">
            © {new Date().getFullYear()} HERO.IO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
