import React from 'react';
import { BarChart3, LineChart, PieChart, TrendingUp, Users, Globe, BarChart, Zap, CheckCircle } from 'lucide-react';


const DigitalAgencyLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-yellow-300 via-lime-300 to-cyan-400" />
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-10 z-0">
          <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-yellow-400 opacity-30" />
          <div className="absolute top-40 right-20 w-40 h-40 rounded-full bg-lime-300 opacity-20" />
          <div className="absolute bottom-10 left-1/4 w-32 h-32 rounded-full bg-cyan-400 opacity-25" />
        </div>
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          <nav className="flex items-center justify-between mb-16">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-lime-400 rounded-lg flex items-center justify-center mr-2">
                <BarChart3 size={24} className="text-white" />
              </div>
              <span className="font-bold text-2xl text-gray-800">DataVision</span>
            </div>
            
            <div className="hidden md:flex space-x-6">
              <a href="#services" className="text-gray-800 hover:text-lime-500 font-medium">Services</a>
              <a href="#analytics" className="text-gray-800 hover:text-lime-500 font-medium">Analytics</a>
              <a href="#testimonials" className="text-gray-800 hover:text-lime-500 font-medium">Testimonials</a>
              <a href="#contact" className="text-gray-800 hover:text-lime-500 font-medium">Contact</a>
            </div>
            
            <button className="bg-cyan-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-cyan-600 transition-colors shadow-lg">
              Get Started
            </button>
          </nav>
          
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
                Transform Data Into 
                <span className="text-cyan-500"> Growth</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-lg">
                We turn complex analytics into actionable insights that drive business success. Our expert team uncovers the stories behind your data.
              </p>
              <div className="flex space-x-4">
                <button className="bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors shadow-lg flex items-center">
                  <BarChart className="mr-2" size={20} />
                  See Our Work
                </button>
                <button className="bg-transparent border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 transform rotate-2">
                <div className="bg-yellow-100 rounded-xl p-4 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-gray-800">Campaign Performance</h3>
                    <div className="bg-lime-400 text-white px-3 py-1 rounded-full text-sm font-medium">+24.8%</div>
                  </div>
                  <div className="h-64 bg-white rounded-lg p-4 flex items-end justify-between">
                    <div className="w-1/12 h-1/5 bg-gray-200 rounded-t-lg"></div>
                    <div className="w-1/12 h-2/5 bg-cyan-200 rounded-t-lg"></div>
                    <div className="w-1/12 h-3/5 bg-lime-300 rounded-t-lg"></div>
                    <div className="w-1/12 h-1/4 bg-gray-200 rounded-t-lg"></div>
                    <div className="w-1/12 h-3/4 bg-yellow-300 rounded-t-lg"></div>
                    <div className="w-1/12 h-2/3 bg-cyan-400 rounded-t-lg"></div>
                    <div className="w-1/12 h-1/2 bg-lime-400 rounded-t-lg"></div>
                    <div className="w-1/12 h-4/5 bg-yellow-400 rounded-t-lg"></div>
                    <div className="w-1/12 h-3/5 bg-gray-200 rounded-t-lg"></div>
                    <div className="w-1/12 h-full bg-cyan-500 rounded-t-lg"></div>
                    <div className="w-1/12 h-4/5 bg-lime-500 rounded-t-lg"></div>
                    <div className="w-1/12 h-2/3 bg-yellow-500 rounded-t-lg"></div>
                  </div>
                </div>
                <div className="flex space-x-3 mb-4">
                  <div className="bg-cyan-100 rounded-xl p-4 flex-1">
                    <LineChart className="text-cyan-500 mb-2" size={24} />
                    <div className="text-2xl font-bold text-gray-800">92%</div>
                    <div className="text-sm text-gray-600">Conversion Rate</div>
                  </div>
                  <div className="bg-lime-100 rounded-xl p-4 flex-1">
                    <PieChart className="text-lime-500 mb-2" size={24} />
                    <div className="text-2xl font-bold text-gray-800">4.8x</div>
                    <div className="text-sm text-gray-600">ROI Increase</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-12 -right-6 bg-yellow-300 rounded-full w-24 h-24 flex items-center justify-center transform rotate-12 shadow-lg">
                <TrendingUp size={32} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Analytics Expertise Section */}
      <section id="analytics" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Analytics Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We blend cutting-edge technology with human insight to deliver analytics that drive real business outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-yellow-400 hover:transform hover:scale-105 transition-transform">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BarChart3 size={32} className="text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Predictive Analytics</h3>
              <p className="text-gray-600">
                Forecast trends and behaviors with advanced machine learning models that give you a competitive edge.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-lime-400 hover:transform hover:scale-105 transition-transform">
              <div className="bg-lime-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users size={32} className="text-lime-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Customer Analytics</h3>
              <p className="text-gray-600">
                Understand your customers deeply with segmentation, journey mapping and behavioral analysis.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-cyan-400 hover:transform hover:scale-105 transition-transform">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Globe size={32} className="text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Marketing Analytics</h3>
              <p className="text-gray-600">
                Optimize your marketing spend across channels with attribution modeling and performance tracking.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
              <p className="text-lg text-gray-600 max-w-xl">
                See how our data-driven approach has helped companies like yours achieve remarkable results.
              </p>
            </div>
            <button className="mt-6 md:mt-0 bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-600 transition-colors shadow-lg flex items-center">
              View All Case Studies
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl overflow-hidden shadow-lg">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-400 h-12 w-12 rounded-lg flex items-center justify-center mr-4">
                    <Zap size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">E-commerce Revenue Growth</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Helped a leading online retailer increase their conversion rate by 37% through advanced customer segmentation and personalized marketing.
                </p>
                <div className="flex items-center text-yellow-700 font-medium">
                  <span>Read case study</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </div>
              <div className="bg-yellow-300 p-6 flex justify-between items-center">
                <div>
                  <div className="text-3xl font-bold text-gray-800">+143%</div>
                  <div className="text-yellow-800">Revenue Increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-800">-28%</div>
                  <div className="text-yellow-800">Acquisition Cost</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl overflow-hidden shadow-lg">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-400 h-12 w-12 rounded-lg flex items-center justify-center mr-4">
                    <TrendingUp size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">SaaS Customer Retention</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Developed a predictive churn model that helped a B2B SaaS company identify at-risk accounts and implement targeted retention strategies.
                </p>
                <div className="flex items-center text-cyan-700 font-medium">
                  <span>Read case study</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </div>
              <div className="bg-cyan-300 p-6 flex justify-between items-center">
                <div>
                  <div className="text-3xl font-bold text-gray-800">+52%</div>
                  <div className="text-cyan-800">Retention Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-800">$2.4M</div>
                  <div className="text-cyan-800">Revenue Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-lime-400 to-cyan-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to transform your data into growth?</h2>
          <p className="text-lg mb-10 max-w-xl mx-auto">
            Let our analytics experts show you how data can drive your business forward with actionable insights.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <button className="bg-white text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg">
              Schedule a Free Consultation
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors">
              View Our Services
            </button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our analytics expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="mr-4 w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center font-bold text-yellow-600 text-lg">
                  JM
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Jane Mitchell</h4>
                  <p className="text-gray-600">CEO, TechFront</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "Their analytics team delivered insights that completely transformed our marketing strategy. Within 3 months, we saw a 78% increase in qualified leads."
              </p>
              <div className="flex text-yellow-400">
                <CheckCircle size={20} />
                <CheckCircle size={20} />
                <CheckCircle size={20} />
                <CheckCircle size={20} />
                <CheckCircle size={20} />
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="mr-4 w-12 h-12 bg-lime-200 rounded-full flex items-center justify-center font-bold text-lime-600 text-lg">
                  RK
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Robert Kim</h4>
                  <p className="text-gray-600">Marketing Director, GrowthFund</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "The predictive analytics dashboard they built for us has been a game-changer. We can now forecast trends with incredible accuracy and stay ahead of market shifts."
              </p>
              <div className="flex text-lime-400">
                <CheckCircle size={20} />
                <CheckCircle size={20} />
                <CheckCircle size={20} />
                <CheckCircle size={20} />
                <CheckCircle size={20} />
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="mr-4 w-12 h-12 bg-cyan-200 rounded-full flex items-center justify-center font-bold text-cyan-600 text-lg">
                  SA
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Sarah Anderson</h4>
                  <p className="text-gray-600">Product Manager, RetailPlus</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "Their team doesn't just provide data - they provide strategic insights that drive real business decisions. The ROI on our partnership has been incredible."
              </p>
              <div className="flex text-cyan-400">
                <CheckCircle size={20} />
                <CheckCircle size={20} />
                <CheckCircle size={20} />
                <CheckCircle size={20} />
                <CheckCircle size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between mb-12">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 bg-lime-400 rounded-lg flex items-center justify-center mr-2">
                  <BarChart3 size={24} className="text-white" />
                </div>
                <span className="font-bold text-2xl">DataVision</span>
              </div>
              <p className="text-gray-400 max-w-xs">
                Transforming complex data into actionable insights that drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-lime-400">Predictive Analytics</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-lime-400">Customer Analytics</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-lime-400">Marketing Analytics</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-lime-400">Data Visualization</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-cyan-400">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-cyan-400">Careers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-cyan-400">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-cyan-400">Contact</a></li>
                </ul>
              </div>
              
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-lg font-bold mb-4">Subscribe</h4>
                <p className="text-gray-400 mb-4">Get the latest insights on data analytics.</p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none w-full" 
                  />
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-r-lg font-medium">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">© 2025 DataVision. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DigitalAgencyLanding;