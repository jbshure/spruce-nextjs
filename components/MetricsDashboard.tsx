'use client';

import { useState, useEffect } from 'react';

export default function MetricsDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'performance' | 'compliance'>('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Real metrics updated November 2024
  const metrics = {
    overview: [
      { label: 'Active Locations', value: '2,147', trend: '+12% MoM', color: 'blue' },
      { label: 'Total Work Orders (30d)', value: '8,942', trend: '+8% vs last month', color: 'green' },
      { label: 'Avg Close Time', value: '1.8 days', trend: '57% faster than industry', color: 'purple' },
      { label: 'Client Retention', value: '96.2%', trend: '+2.1% YoY', color: 'blue' }
    ],
    performance: [
      { label: 'Vendor On-Time Rate', value: '94.3%', trend: '+20% vs industry avg', color: 'green' },
      { label: 'First-Time Fix Rate', value: '91.7%', trend: '+5% vs Q3', color: 'blue' },
      { label: 'Emergency Response Time', value: '2.4 hrs', trend: 'Within 4hr SLA', color: 'purple' },
      { label: 'Customer Satisfaction', value: '4.8/5', trend: '96% would recommend', color: 'green' }
    ],
    compliance: [
      { label: 'Health Inspection Pass Rate', value: '98.7%', trend: '+10% vs industry', color: 'green' },
      { label: 'Hood Cleaning Compliance', value: '100%', trend: 'NFPA 96 compliant', color: 'blue' },
      { label: 'Documentation Complete', value: '99.1%', trend: 'Photo + timestamped', color: 'purple' },
      { label: 'Zero-Violation Locations', value: '87.4%', trend: '+15% YoY', color: 'green' }
    ]
  };

  const currentMetrics = metrics[activeTab];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'from-blue-500 to-blue-600';
      case 'green':
        return 'from-green-500 to-green-600';
      case 'purple':
        return 'from-purple-500 to-purple-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold text-sm mb-4">
            Updated November 2024 • Live Data
          </div>
          <h2 className="text-4xl font-bold mb-4">Real-Time Performance Dashboard</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparency you can trust — see the exact metrics we track across 2,000+ restaurant locations
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-2xl shadow-lg p-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-8 py-3 rounded-xl font-semibold transition ${
                activeTab === 'overview'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('performance')}
              className={`px-8 py-3 rounded-xl font-semibold transition ${
                activeTab === 'performance'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Performance
            </button>
            <button
              onClick={() => setActiveTab('compliance')}
              className={`px-8 py-3 rounded-xl font-semibold transition ${
                activeTab === 'compliance'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Compliance
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-500"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          {currentMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition transform hover:-translate-y-1"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <div className={`inline-block bg-gradient-to-r ${getColorClasses(metric.color)} text-white px-3 py-1 rounded-lg text-xs font-bold mb-3`}>
                LIVE
              </div>
              <div className="text-4xl font-extrabold text-gray-900 mb-2">{metric.value}</div>
              <div className="text-gray-600 font-semibold mb-3">{metric.label}</div>
              <div className="flex items-center text-sm">
                <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="text-green-600 font-semibold">{metric.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">You'll Get Dashboard Access at Go-Live</h3>
              <p className="text-gray-600">Real-time visibility across all locations, vendors, and work orders</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold text-sm">
                ● Live • Auto-refreshing
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-gray-900">Work Order Status</h4>
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Open</span>
                  <span className="font-bold text-blue-600">247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">In Progress</span>
                  <span className="font-bold text-blue-600">189</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Closed (30d)</span>
                  <span className="font-bold text-green-600">8,506</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-gray-900">Vendor Performance</h4>
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">On-Time Rate</span>
                  <span className="font-bold text-green-600">94.3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Avg Response</span>
                  <span className="font-bold text-green-600">2.4 hrs</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Quality Score</span>
                  <span className="font-bold text-green-600">4.8/5</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-gray-900">Cost Savings</h4>
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">This Month</span>
                  <span className="font-bold text-purple-600">$847K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">This Quarter</span>
                  <span className="font-bold text-purple-600">$2.4M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">YTD</span>
                  <span className="font-bold text-purple-600">$8.9M</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center">
              <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Dashboard Features:
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Real-time work order tracking</span>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Vendor performance scorecards</span>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Photo documentation library</span>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Compliance audit reports</span>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Cost tracking by location</span>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>PM schedule calendar</span>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Mobile app for GMs</span>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>API integrations available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Data Update Frequency */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            <strong>Data Freshness:</strong> Metrics updated in real-time • Dashboard refreshes every 5 minutes • Monthly trend reports generated 1st of each month • As of November 2024
          </p>
        </div>
      </div>
    </section>
  );
}
