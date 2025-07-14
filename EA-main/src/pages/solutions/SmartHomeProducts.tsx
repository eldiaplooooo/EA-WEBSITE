import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Zap, Shield, Wifi, Smartphone, Home, Lightbulb, Thermometer, Lock, Camera, Speaker, Tv, Filter, Search, Heart, GitCompare as Compare, CheckCircle, TrendingUp, Award, Users } from 'lucide-react';

const SmartHomeProducts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [compareList, setCompareList] = useState<string[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', name: 'All Products', icon: Home },
    { id: 'lighting', name: 'Smart Lighting', icon: Lightbulb },
    { id: 'climate', name: 'Climate Control', icon: Thermometer },
    { id: 'security', name: 'Security', icon: Lock },
    { id: 'entertainment', name: 'Entertainment', icon: Tv },
    { id: 'speakers', name: 'Smart Speakers', icon: Speaker },
    { id: 'cameras', name: 'Cameras', icon: Camera }
  ];

  const products = [
    // SMART LIGHTING - Philips Hue
    {
      id: 'philips-hue-starter',
      name: 'Philips Hue White and Color Ambiance Starter Kit',
      brand: 'Philips',
      category: 'lighting',
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.8,
      reviews: 2847,
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['16 million colors', 'Voice control', 'App control', 'Dimming'],
      description: 'Transform your home with smart lighting that adapts to your mood and schedule.',
      inStock: true,
      bestseller: true
    },
    {
      id: 'philips-hue-strip',
      name: 'Philips Hue Lightstrip Plus 2m',
      brand: 'Philips',
      category: 'lighting',
      price: 79.99,
      originalPrice: 89.99,
      rating: 4.7,
      reviews: 1523,
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Flexible design', 'Cuttable', 'Extendable', 'Sync with music'],
      description: 'Flexible light strip perfect for accent lighting and creative installations.',
      inStock: true,
      bestseller: false
    },
    {
      id: 'philips-hue-go',
      name: 'Philips Hue Go Portable Smart Light',
      brand: 'Philips',
      category: 'lighting',
      price: 69.99,
      originalPrice: 79.99,
      rating: 4.6,
      reviews: 892,
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Portable', 'Battery powered', 'Wireless', 'Color changing'],
      description: 'Portable smart light that goes anywhere in your home.',
      inStock: true,
      bestseller: false
    },
    {
      id: 'lifx-color-bulb',
      name: 'LIFX Color A19 Smart LED Bulb',
      brand: 'LIFX',
      category: 'lighting',
      price: 49.99,
      originalPrice: 59.99,
      rating: 4.5,
      reviews: 1234,
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['WiFi enabled', '16 million colors', 'No hub required', 'Energy efficient'],
      description: 'Bright, colorful smart bulb that connects directly to WiFi.',
      inStock: true,
      bestseller: false
    },
    {
      id: 'nanoleaf-panels',
      name: 'Nanoleaf Shapes Hexagons Starter Kit',
      brand: 'Nanoleaf',
      category: 'lighting',
      price: 199.99,
      originalPrice: 229.99,
      rating: 4.4,
      reviews: 567,
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Modular design', 'Touch reactive', 'Music sync', 'App control'],
      description: 'Modular smart lighting panels for creative wall displays.',
      inStock: true,
      bestseller: false
    },

    // CLIMATE CONTROL
    {
      id: 'nest-thermostat',
      name: 'Google Nest Learning Thermostat',
      brand: 'Google',
      category: 'climate',
      price: 249.99,
      originalPrice: 279.99,
      rating: 4.6,
      reviews: 3421,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Auto-learning', 'Energy saving', 'Remote control', 'Schedule programming'],
      description: 'Smart thermostat that learns your preferences and saves energy automatically.',
      inStock: true,
      bestseller: true
    },
    {
      id: 'ecobee-thermostat',
      name: 'ecobee SmartThermostat with Voice Control',
      brand: 'ecobee',
      category: 'climate',
      price: 229.99,
      originalPrice: 249.99,
      rating: 4.5,
      reviews: 1876,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Built-in Alexa', 'Room sensors', 'Smart scheduling', 'Energy reports'],
      description: 'Advanced thermostat with built-in voice assistant and room sensors.',
      inStock: true,
      bestseller: false
    },
    {
      id: 'honeywell-t9',
      name: 'Honeywell Home T9 Smart Thermostat',
      brand: 'Honeywell',
      category: 'climate',
      price: 199.99,
      originalPrice: 219.99,
      rating: 4.3,
      reviews: 1245,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Smart room sensors', 'Geofencing', 'Voice control', 'Energy savings'],
      description: 'Smart thermostat with room sensors for precise temperature control.',
      inStock: true,
      bestseller: false
    },
    {
      id: 'dyson-pure-cool',
      name: 'Dyson Pure Cool TP07 Air Purifier',
      brand: 'Dyson',
      category: 'climate',
      price: 549.99,
      originalPrice: 599.99,
      rating: 4.7,
      reviews: 892,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['HEPA filtration', 'Air quality monitoring', 'App control', 'Oscillation'],
      description: 'Smart air purifier and fan with real-time air quality monitoring.',
      inStock: true,
      bestseller: false
    },

    // SECURITY SYSTEMS
    {
      id: 'ring-doorbell',
      name: 'Ring Video Doorbell Pro 2',
      brand: 'Ring',
      category: 'security',
      price: 199.99,
      originalPrice: 229.99,
      rating: 4.4,
      reviews: 5632,
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['1080p HD video', 'Motion detection', 'Two-way talk', 'Night vision'],
      description: 'Advanced video doorbell with crystal clear video and smart alerts.',
      inStock: true,
      bestseller: true
    },
    {
      id: 'august-smart-lock',
      name: 'August Wi-Fi Smart Lock',
      brand: 'August',
      category: 'security',
      price: 279.99,
      originalPrice: 299.99,
      rating: 4.2,
      reviews: 2134,
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Keyless entry', 'Remote access', 'Auto-lock', 'Guest access'],
      description: 'Smart lock that works with your existing deadbolt.',
      inStock: true,
      bestseller: false
    },
    {
      id: 'yale-assure-lock',
      name: 'Yale Assure Lock SL Connected',
      brand: 'Yale',
      category: 'security',
      price: 249.99,
      originalPrice: 279.99,
      rating: 4.3,
      reviews: 1567,
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Touchscreen keypad', 'Z-Wave Plus', 'Tamper alarm', 'Auto-relock'],
      description: 'Sleek touchscreen smart lock with advanced security features.',
      inStock: true,
      bestseller: false
    },
    {
      id: 'simplisafe-system',
      name: 'SimpliSafe 8-Piece Wireless Home Security System',
      brand: 'SimpliSafe',
      category: 'security',
      price: 199.99,
      originalPrice: 244.99,
      rating: 4.6,
      reviews: 3421,
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Wireless setup', '24/7 monitoring', 'Mobile alerts', 'No contracts'],
      description: 'Complete wireless security system with professional monitoring.',
      inStock: true,
      bestseller: true
    },

    // CAMERAS
    {
      id: 'arlo-camera',
      name: 'Arlo Pro 4 Wireless Security Camera',
      brand: 'Arlo',
      category: 'cameras',
      price: 179.99,
      originalPrice: 199.99,
      rating: 4.3,
      reviews: 2156,
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Wire-free', '2K video', 'Color night vision', 'Weather resistant'],
      description: 'Completely wireless security camera with exceptional video quality.',
      inStock: true,
      bestseller: false
    },
    {
      id: 'nest-cam-outdoor',
      name: 'Google Nest Cam (Battery)',
      brand: 'Google',
      category: 'cameras',
      price: 179.99,
      originalPrice: 199.99,
      rating: 4.5,
      reviews: 1834,
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Battery powered', '1080p HDR', 'Night vision', 'Person alerts'],
      description: 'Wireless security camera with intelligent alerts and long battery life.',
      inStock: true,
      bestseller: true
    },
    {
      id: 'wyze-cam-v3',
      name: 'Wyze Cam v3 1080p HD Indoor/Outdoor Camera',
      brand: 'Wyze',
      category: 'cameras',
      price: 35.99,
      originalPrice: 39.99,
      rating: 4.4,
      reviews: 8765,
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Color night vision', 'Weather resistant', 'Motion detection', 'Cloud storage'],
      description: 'Affordable smart camera with premium features.',
      inStock: true,
      bestseller: true
    },
    {
      id: 'eufy-indoor-cam',
      name: 'eufy Security Indoor Cam 2K',
      brand: 'eufy',
      category: 'cameras',
      price: 49.99,
      originalPrice: 59.99,
      rating: 4.6,
      reviews: 2341,
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['2K resolution', 'Pan & tilt', 'AI detection', 'Local storage'],
      description: 'High-resolution indoor camera with AI-powered detection.',
      inStock: true,
      bestseller: false
    },

    // SMART SPEAKERS
    {
      id: 'amazon-echo',
      name: 'Amazon Echo (4th Gen)',
      brand: 'Amazon',
      category: 'speakers',
      price: 99.99,
      originalPrice: 119.99,
      rating: 4.7,
      reviews: 8934,
      image: 'https://images.pexels.com/photos/4790267/pexels-photo-4790267.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Premium sound', 'Built-in hub', 'Voice control', 'Music streaming'],
      description: 'Smart speaker with premium sound and built-in smart home hub.',
      inStock: true,
      bestseller: true
    },
    {
      id: 'google-nest-audio',
      name: 'Google Nest Audio',
      brand: 'Google',
      category: 'speakers',
      price: 89.99,
      originalPrice: 99.99,
      rating: 4.6,
      reviews: 4567,
      image: 'https://images.pexels.com/photos/4790267/pexels-photo-4790267.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Rich sound', 'Google Assistant', 'Multi-room audio', 'Touch controls'],
      description: 'Smart speaker with rich sound and Google Assistant built-in.',
      inStock: true,
      bestseller: false
    },
    {
      id: 'amazon-echo-dot',
      name: 'Amazon Echo Dot (5th Gen)',
      brand: 'Amazon',
      category: 'speakers',
      price: 49.99,
      originalPrice: 59.99,
      rating: 4.5,
      reviews: 12456,
      image: 'https://images.pexels.com/photos/4790267/pexels-photo-4790267.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Compact design', 'Alexa built-in', 'Smart home control', 'Music streaming'],
      description: 'Compact smart speaker with Alexa for any room.',
      inStock: true,
      bestseller: true
    },
    {
      id: 'apple-homepod-mini',
      name: 'Apple HomePod mini',
      brand: 'Apple',
      category: 'speakers',
      price: 99.99,
      originalPrice: 99.99,
      rating: 4.4,
      reviews: 3245,
      image: 'https://images.pexels.com/photos/4790267/pexels-photo-4790267.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['360-degree audio', 'Siri built-in', 'HomeKit hub', 'Intercom'],
      description: 'Compact smart speaker with amazing sound and Siri.',
      inStock: true,
      bestseller: false
    },
    {
      id: 'sonos-one',
      name: 'Sonos One (Gen 2)',
      brand: 'Sonos',
      category: 'speakers',
      price: 199.99,
      originalPrice: 219.99,
      rating: 4.8,
      reviews: 2876,
      image: 'https://images.pexels.com/photos/4790267/pexels-photo-4790267.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Premium audio', 'Alexa & Google', 'Multi-room', 'Trueplay tuning'],
      description: 'Premium smart speaker with exceptional sound quality.',
      inStock: true,
      bestseller: false
    },

    // ENTERTAINMENT
    {
      id: 'apple-tv',
      name: 'Apple TV 4K (3rd generation)',
      brand: 'Apple',
      category: 'entertainment',
      price: 179.99,
      originalPrice: 199.99,
      rating: 4.8,
      reviews: 3245,
      image: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['4K HDR', 'A15 Bionic chip', 'Siri Remote', 'AirPlay'],
      description: 'The ultimate streaming device with 4K HDR and powerful performance.',
      inStock: true,
      bestseller: true
    },
    {
      id: 'roku-ultra',
      name: 'Roku Ultra 4K Streaming Device',
      brand: 'Roku',
      category: 'entertainment',
      price: 99.99,
      originalPrice: 119.99,
      rating: 4.5,
      reviews: 2876,
      image: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['4K/HDR/Dolby Vision', 'Voice remote', 'Lost remote finder', 'Ethernet port'],
      description: 'Premium streaming device with advanced features and voice remote.',
      inStock: true,
      bestseller: false
    },
    {
      id: 'nvidia-shield',
      name: 'NVIDIA Shield TV Pro',
      brand: 'NVIDIA',
      category: 'entertainment',
      price: 199.99,
      originalPrice: 219.99,
      rating: 4.6,
      reviews: 1567,
      image: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['4K HDR', 'AI upscaling', 'Gaming capable', 'Google Assistant'],
      description: 'Powerful streaming device with AI upscaling and gaming capabilities.',
      inStock: true,
      bestseller: false
    },
    {
      id: 'chromecast-google-tv',
      name: 'Chromecast with Google TV (4K)',
      brand: 'Google',
      category: 'entertainment',
      price: 49.99,
      originalPrice: 59.99,
      rating: 4.4,
      reviews: 4321,
      image: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['4K HDR', 'Google TV interface', 'Voice remote', 'Personalized recommendations'],
      description: 'Affordable 4K streaming device with Google TV interface.',
      inStock: true,
      bestseller: true
    },
    {
      id: 'fire-tv-stick-4k',
      name: 'Amazon Fire TV Stick 4K Max',
      brand: 'Amazon',
      category: 'entertainment',
      price: 54.99,
      originalPrice: 64.99,
      rating: 4.3,
      reviews: 7654,
      image: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['4K Ultra HD', 'Alexa Voice Remote', 'Wi-Fi 6', 'Dolby Vision'],
      description: 'Fast 4K streaming stick with Alexa Voice Remote.',
      inStock: true,
      bestseller: false
    }
  ];

  const bundles = [
    {
      id: 'starter-bundle',
      name: 'Smart Home Starter Bundle',
      description: 'Perfect for beginners - essential smart home devices',
      products: ['Philips Hue Starter Kit', 'Amazon Echo Dot', 'Ring Video Doorbell'],
      originalPrice: 519.97,
      bundlePrice: 449.99,
      savings: 69.98,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
      popular: true
    },
    {
      id: 'security-bundle',
      name: 'Complete Security Bundle',
      description: 'Comprehensive home security solution',
      products: ['Ring Doorbell Pro 2', 'Arlo Pro 4 (2x)', 'August Smart Lock', 'SimpliSafe System'],
      originalPrice: 859.96,
      bundlePrice: 729.99,
      savings: 129.97,
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=400',
      popular: false
    },
    {
      id: 'lighting-bundle',
      name: 'Smart Lighting Bundle',
      description: 'Complete lighting transformation package',
      products: ['Philips Hue Starter Kit', 'Hue Lightstrip Plus', 'Hue Go', 'LIFX Color Bulbs (4x)'],
      originalPrice: 549.95,
      bundlePrice: 479.99,
      savings: 69.96,
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400',
      popular: false
    },
    {
      id: 'entertainment-bundle',
      name: 'Entertainment Hub Bundle',
      description: 'Ultimate entertainment and audio setup',
      products: ['Apple TV 4K', 'Sonos One (2x)', 'Amazon Echo', 'Philips Hue Sync'],
      originalPrice: 679.96,
      bundlePrice: 599.99,
      savings: 79.97,
      image: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=400',
      popular: false
    },
    {
      id: 'climate-bundle',
      name: 'Climate Control Bundle',
      description: 'Smart climate and air quality management',
      products: ['Nest Learning Thermostat', 'Dyson Pure Cool', 'ecobee Room Sensors (3x)'],
      originalPrice: 1049.97,
      bundlePrice: 899.99,
      savings: 149.98,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
      popular: false
    },
    {
      id: 'premium-bundle',
      name: 'Premium Smart Home Bundle',
      description: 'Complete smart home transformation - everything included',
      products: ['All lighting systems', 'Complete security', 'Climate control', 'Entertainment hub', 'Smart speakers'],
      originalPrice: 2299.97,
      bundlePrice: 1799.99,
      savings: 499.98,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
      popular: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = priceRange === 'all' ||
                        (priceRange === 'under100' && product.price < 100) ||
                        (priceRange === '100to200' && product.price >= 100 && product.price <= 200) ||
                        (priceRange === 'over200' && product.price > 200);
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleCompare = (productId: string) => {
    setCompareList(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : prev.length < 3 ? [...prev, productId] : prev
    );
  };

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <Link 
              to="/solutions/smart-living" 
              className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Smart Living</span>
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Smart Home Products</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Curated collection of the best smart home devices from leading brands. 
              Transform your home with our AI-powered bundles and expert recommendations.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto mb-8">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-blue-100">Premium Products</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">30%</div>
                  <div className="text-sm text-blue-100">Average Savings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">6</div>
                  <div className="text-sm text-blue-100">Smart Bundles</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                View AI Bundles
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Get Personal Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600'
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Price Filter */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            >
              <option value="all">All Prices</option>
              <option value="under100">Under €100</option>
              <option value="100to200">€100 - €200</option>
              <option value="over200">Over €200</option>
            </select>
          </div>
        </div>
      </section>

      {/* AI-Powered Bundles */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">AI-Powered Smart Home Bundles</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Curated bundles designed by our AI to give you the perfect smart home experience at unbeatable prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bundles.map((bundle) => (
              <div key={bundle.id} className={`relative bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-xl ${
                bundle.popular ? 'border-blue-500 shadow-lg' : 'border-gray-200 dark:border-gray-700'
              }`}>
                {bundle.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg mb-6 overflow-hidden">
                  <img src={bundle.image} alt={bundle.name} className="w-full h-full object-cover" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{bundle.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{bundle.description}</p>

                <div className="space-y-2 mb-6">
                  {bundle.products.map((product, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{product}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 line-through">€{bundle.originalPrice}</div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">€{bundle.bundlePrice}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">Save €{bundle.savings}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {Math.round((bundle.savings / bundle.originalPrice) * 100)}% off
                      </div>
                    </div>
                  </div>

                  <button className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    bundle.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}>
                    Add Bundle to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Individual Products ({filteredProducts.length})
            </h2>
            
            {compareList.length > 0 && (
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Compare className="h-4 w-4" />
                <span>Compare ({compareList.length})</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                <div className="relative">
                  <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-t-xl overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  
                  {product.bestseller && (
                    <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Bestseller
                    </div>
                  )}
                  
                  <div className="absolute top-2 right-2 flex space-x-2">
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className={`p-2 rounded-full transition-colors ${
                        favorites.includes(product.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-red-500'
                      }`}
                    >
                      <Heart className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => toggleCompare(product.id)}
                      className={`p-2 rounded-full transition-colors ${
                        compareList.includes(product.id)
                          ? 'bg-blue-500 text-white'
                          : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-500'
                      }`}
                    >
                      <Compare className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">{product.brand}</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">{product.name}</h3>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {product.features.length > 2 && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        +{product.features.length - 2} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-gray-900 dark:text-white">
                          €{product.price}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                            €{product.originalPrice}
                          </span>
                        )}
                      </div>
                      {product.originalPrice > product.price && (
                        <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                          Save €{(product.originalPrice - product.price).toFixed(2)}
                        </div>
                      )}
                    </div>
                    
                    <div className={`text-sm font-medium ${
                      product.inStock ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                    }`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </div>
                  </div>

                  <button
                    disabled={!product.inStock}
                    className={`w-full py-2 rounded-lg font-medium transition-all duration-300 ${
                      product.inStock
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <ShoppingCart className="h-4 w-4" />
                      <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No products found</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your filters or search terms.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Smart Home Products */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Smart Home Solutions?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We don't just sell products – we create intelligent ecosystems tailored to your lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Curated Selection',
                description: 'Only the best products from trusted brands, tested by our experts.'
              },
              {
                icon: Zap,
                title: 'AI Integration',
                description: 'Every product works seamlessly with our MIND AI system.'
              },
              {
                icon: Users,
                title: 'Expert Support',
                description: 'Professional installation and ongoing support included.'
              },
              {
                icon: TrendingUp,
                title: 'Best Prices',
                description: 'Competitive pricing with exclusive bundle discounts.'
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Home?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a personalized smart home consultation and custom bundle recommendation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              View All Bundles
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartHomeProducts;