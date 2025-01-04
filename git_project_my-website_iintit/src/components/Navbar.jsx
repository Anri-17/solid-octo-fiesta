import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useLanguage } from '../context/LanguageContext'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { t } = useLanguage()
  const { totalItems } = useCart()
  const { user, role } = useAuth()

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-black">
          FootballGear
        </Link>
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-black hover:text-hero">
              {t('home')}
            </Link>
            <Link to="/products" className="text-black hover:text-hero">
              {t('products')}
            </Link>
            <Link to="/contact" className="text-black hover:text-hero">
              {t('contact')}
            </Link>
            {role === 'admin' && (
              <Link to="/admin" className="text-black hover:text-hero">
                {t('admin_panel')}
              </Link>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative text-black hover:text-hero">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-hero text-white text-xs rounded-full px-2 py-1">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link to="/account" className="text-black hover:text-hero">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
