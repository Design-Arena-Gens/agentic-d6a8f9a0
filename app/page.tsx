'use client';

import { useState } from 'react';
import { Search, MapPin, Briefcase, Users, Calendar, Download, Loader2 } from 'lucide-react';

interface Lead {
  username: string;
  displayName: string;
  bio: string;
  followers: number;
  engagement: number;
  accountAge: string;
  location: string;
  industry: string;
  signals: string[];
  priority: 'High' | 'Medium' | 'Low';
  reasoning: string;
  contactInfo: string;
}

interface Filters {
  location: string;
  industry: string;
  minFollowers: number;
  maxFollowers: number;
  accountAge: string;
}

export default function Home() {
  const [filters, setFilters] = useState<Filters>({
    location: '',
    industry: '',
    minFollowers: 500,
    maxFollowers: 10000,
    accountAge: '< 1 year',
  });

  const [leads, setLeads] = useState<Lead[]>([]);
  const [isScanning, setIsScanning] = useState(false);

  const industries = [
    'Fashion',
    'Tech/SaaS',
    'Wellness',
    'Food & Beverage',
    'Lifestyle',
    'Education',
    'Beauty & Cosmetics',
    'Fitness',
    'Home Decor',
    'Sustainability',
    'Art & Design',
    'E-commerce',
  ];

  const handleScan = async () => {
    setIsScanning(true);

    // Simulate scanning delay
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Generate mock leads based on filters
    const mockLeads: Lead[] = generateMockLeads(filters);

    setLeads(mockLeads);
    setIsScanning(false);
  };

  const generateMockLeads = (filters: Filters): Lead[] => {
    const mockData: Lead[] = [
      {
        username: '@glowforge.studios',
        displayName: 'GlowForge Studios',
        bio: '✨ Handcrafted ceramic art for modern spaces | Co-founded by @sarah.creates | DM for custom orders',
        followers: 3200,
        engagement: 4.8,
        accountAge: '8 months',
        location: filters.location || 'Austin, TX',
        industry: filters.industry || 'Art & Design',
        signals: ['Co-founder mention', 'DM for collab', 'Active Reels', 'Recent product launch'],
        priority: 'High',
        reasoning: 'Strong engagement rate, founder-led brand, actively posting campaigns, clear B2B signals',
        contactInfo: 'Email in bio, DM open',
      },
      {
        username: '@verdant.supply',
        displayName: 'Verdant Supply Co',
        bio: '🌱 Sustainable home goods | Founded 2024 | Ships worldwide | Building a greener future',
        followers: 5800,
        engagement: 3.2,
        accountAge: '6 months',
        location: filters.location || 'Portland, OR',
        industry: filters.industry || 'Sustainability',
        signals: ['Startup mention', 'Founded 2024', 'Active Stories', 'Product campaigns'],
        priority: 'High',
        reasoning: 'New brand with solid growth, sustainability niche trending, consistent content strategy',
        contactInfo: 'Link in bio',
      },
      {
        username: '@nourish.bowls',
        displayName: 'Nourish Bowls',
        bio: 'Healthy meal prep delivered 🥗 | Founder: @chef.maria | Now in 3 cities | Order via link',
        followers: 8900,
        engagement: 5.1,
        accountAge: '11 months',
        location: filters.location || 'Miami, FL',
        industry: filters.industry || 'Food & Beverage',
        signals: ['Founder identified', 'Expansion phase', 'High engagement', 'Active Reels'],
        priority: 'High',
        reasoning: 'Expanding rapidly, excellent engagement, food service needs strong visual content',
        contactInfo: 'Website + DM',
      },
      {
        username: '@thread.theory',
        displayName: 'Thread Theory',
        bio: 'Minimalist streetwear for creators | Est. 2024 | Limited drops | Join the movement',
        followers: 4500,
        engagement: 6.2,
        accountAge: '5 months',
        location: filters.location || 'Los Angeles, CA',
        industry: filters.industry || 'Fashion',
        signals: ['New brand', 'Creator-focused', 'Drop model', 'High engagement'],
        priority: 'High',
        reasoning: 'Premium engagement rate, fashion vertical ideal for cinematic content, limited drops create urgency',
        contactInfo: 'Email in bio',
      },
      {
        username: '@mindflow.app',
        displayName: 'MindFlow',
        bio: '🧠 Productivity app for ADHD minds | Beta launching soon | Built by neurodivergent founders',
        followers: 2100,
        engagement: 7.3,
        accountAge: '4 months',
        location: filters.location || 'Remote',
        industry: filters.industry || 'Tech/SaaS',
        signals: ['Founders mentioned', 'Pre-launch', 'Exceptional engagement', 'Active community'],
        priority: 'High',
        reasoning: 'Very high engagement, pre-launch phase needs content, tech startups value branding',
        contactInfo: 'Waitlist link',
      },
      {
        username: '@luna.botanicals',
        displayName: 'Luna Botanicals',
        bio: 'Organic skincare made with love 🌿 | Woman-owned | Small batch | Free shipping over $50',
        followers: 6200,
        engagement: 4.1,
        accountAge: '9 months',
        location: filters.location || 'Brooklyn, NY',
        industry: filters.industry || 'Beauty & Cosmetics',
        signals: ['Small batch production', 'Woman-owned', 'Active posting', 'Story campaigns'],
        priority: 'Medium',
        reasoning: 'Good growth trajectory, beauty brands need visual content, consistent posting schedule',
        contactInfo: 'Shop link + email',
      },
      {
        username: '@peak.performance.co',
        displayName: 'Peak Performance',
        bio: '💪 Athletic performance coaching | Online + In-person | Transforming athletes since 2024',
        followers: 3800,
        engagement: 5.8,
        accountAge: '7 months',
        location: filters.location || 'Denver, CO',
        industry: filters.industry || 'Fitness',
        signals: ['New business', 'Hybrid model', 'Client testimonials', 'Regular Reels'],
        priority: 'Medium',
        reasoning: 'Service-based business, good engagement, fitness content performs well on Reels',
        contactInfo: 'Booking link',
      },
      {
        username: '@brew.republic',
        displayName: 'Brew Republic',
        bio: '☕ Third-wave coffee roasters | Direct trade | Opening 2nd location | Austin born',
        followers: 7400,
        engagement: 3.9,
        accountAge: '10 months',
        location: filters.location || 'Austin, TX',
        industry: filters.industry || 'Food & Beverage',
        signals: ['Expanding', 'Local brand', 'Behind-scenes content', 'Community focus'],
        priority: 'Medium',
        reasoning: 'Expansion phase indicates budget, local businesses value storytelling, F&B needs visual content',
        contactInfo: 'Email + location tag',
      },
      {
        username: '@studyhub.ai',
        displayName: 'StudyHub AI',
        bio: '📚 AI-powered study companion for students | Join 5k+ learners | Co-founders: @alex & @jamie',
        followers: 5300,
        engagement: 4.5,
        accountAge: '6 months',
        location: filters.location || 'San Francisco, CA',
        industry: filters.industry || 'Education',
        signals: ['Co-founders listed', 'Growth metrics', 'Tech product', 'Active community'],
        priority: 'Medium',
        reasoning: 'EdTech with traction, founders visible, growing user base signals potential budget',
        contactInfo: 'App link + Discord',
      },
      {
        username: '@haven.spaces',
        displayName: 'Haven Spaces',
        bio: '🏠 Curated home decor for small spaces | Founded by interior designer | Shop the look',
        followers: 4700,
        engagement: 3.7,
        accountAge: '8 months',
        location: filters.location || 'Seattle, WA',
        industry: filters.industry || 'Home Decor',
        signals: ['Founder expertise', 'Shoppable posts', 'Design focus', 'Regular updates'],
        priority: 'Medium',
        reasoning: 'Design-focused brand, founder has expertise, home decor needs strong visuals',
        contactInfo: 'Shop link',
      },
      {
        username: '@ritual.wellness',
        displayName: 'Ritual Wellness',
        bio: 'Holistic wellness products | Natural ingredients | Subscribe & save 15% | Shipping nationwide',
        followers: 9200,
        engagement: 2.8,
        accountAge: '11 months',
        location: filters.location || 'Boulder, CO',
        industry: filters.industry || 'Wellness',
        signals: ['Subscription model', 'National shipping', 'Product line', 'Regular posts'],
        priority: 'Low',
        reasoning: 'Lower engagement rate, less founder visibility, but established product line shows revenue',
        contactInfo: 'Website only',
      },
      {
        username: '@urban.nest.supply',
        displayName: 'Urban Nest Supply',
        bio: 'Modern furniture for city living | Flat-pack design | Sustainable materials | Free assembly',
        followers: 6800,
        engagement: 3.1,
        accountAge: '9 months',
        location: filters.location || 'Chicago, IL',
        industry: filters.industry || 'Home Decor',
        signals: ['Modern brand', 'Sustainability angle', 'Unique value prop', 'Product shots'],
        priority: 'Low',
        reasoning: 'Decent following but engagement could be higher, furniture brands often need visual content',
        contactInfo: 'Contact form',
      },
    ];

    // Filter based on follower count
    return mockData.filter(
      lead => lead.followers >= filters.minFollowers && lead.followers <= filters.maxFollowers
    ).sort((a, b) => {
      const priorityOrder = { High: 0, Medium: 1, Low: 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  };

  const exportToCSV = () => {
    const headers = ['Priority', 'Username', 'Display Name', 'Followers', 'Engagement %', 'Industry', 'Location', 'Account Age', 'Signals', 'Reasoning', 'Contact Info'];
    const rows = leads.map(lead => [
      lead.priority,
      lead.username,
      lead.displayName,
      lead.followers,
      lead.engagement,
      lead.industry,
      lead.location,
      lead.accountAge,
      lead.signals.join('; '),
      lead.reasoning,
      lead.contactInfo,
    ]);

    const csv = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `instagram-leads-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Instagram Lead Scout
          </h1>
          <p className="text-xl text-gray-600">
            AI-Powered B2B Lead Generation for Early-Stage Startups
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Find brands that need cinematic storytelling, branding, and campaign support
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Search className="w-6 h-6 text-purple-600" />
            Search Filters
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Location */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <MapPin className="w-4 h-4 text-purple-600" />
                Location
              </label>
              <input
                type="text"
                placeholder="e.g., Los Angeles, CA or United States"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              />
            </div>

            {/* Industry */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <Briefcase className="w-4 h-4 text-purple-600" />
                Industry
              </label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                value={filters.industry}
                onChange={(e) => setFilters({ ...filters, industry: e.target.value })}
              >
                <option value="">All Industries</option>
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>

            {/* Followers Min */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <Users className="w-4 h-4 text-purple-600" />
                Min Followers
              </label>
              <input
                type="number"
                placeholder="500"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                value={filters.minFollowers}
                onChange={(e) => setFilters({ ...filters, minFollowers: parseInt(e.target.value) || 0 })}
              />
            </div>

            {/* Followers Max */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <Users className="w-4 h-4 text-purple-600" />
                Max Followers
              </label>
              <input
                type="number"
                placeholder="10000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                value={filters.maxFollowers}
                onChange={(e) => setFilters({ ...filters, maxFollowers: parseInt(e.target.value) || 50000 })}
              />
            </div>

            {/* Account Age */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <Calendar className="w-4 h-4 text-purple-600" />
                Account Age
              </label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                value={filters.accountAge}
                onChange={(e) => setFilters({ ...filters, accountAge: e.target.value })}
              >
                <option value="< 6 months">Less than 6 months</option>
                <option value="< 1 year">Less than 1 year</option>
                <option value="< 2 years">Less than 2 years</option>
              </select>
            </div>

            {/* Scan Button */}
            <div className="flex items-end">
              <button
                onClick={handleScan}
                disabled={isScanning}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {isScanning ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Scanning Instagram...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    Start Lead Scan
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {leads.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Found {leads.length} Qualified Leads
              </h2>
              <button
                onClick={exportToCSV}
                className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold"
              >
                <Download className="w-5 h-5" />
                Export to CSV
              </button>
            </div>

            <div className="space-y-4">
              {leads.map((lead, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-800">{lead.displayName}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            lead.priority === 'High'
                              ? 'bg-red-100 text-red-700'
                              : lead.priority === 'Medium'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-green-100 text-green-700'
                          }`}
                        >
                          {lead.priority} Priority
                        </span>
                      </div>
                      <p className="text-purple-600 font-medium mb-2">{lead.username}</p>
                      <p className="text-gray-600 mb-4 italic">{lead.bio}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-4 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500 font-medium">Followers:</span>
                      <p className="font-semibold text-gray-800">{lead.followers.toLocaleString()}</p>
                    </div>
                    <div>
                      <span className="text-gray-500 font-medium">Engagement:</span>
                      <p className="font-semibold text-gray-800">{lead.engagement}%</p>
                    </div>
                    <div>
                      <span className="text-gray-500 font-medium">Account Age:</span>
                      <p className="font-semibold text-gray-800">{lead.accountAge}</p>
                    </div>
                    <div>
                      <span className="text-gray-500 font-medium">Location:</span>
                      <p className="font-semibold text-gray-800">{lead.location}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-gray-500 font-medium text-sm">Industry:</span>
                    <p className="font-semibold text-gray-800">{lead.industry}</p>
                  </div>

                  <div className="mb-4">
                    <span className="text-gray-500 font-medium text-sm">Key Signals:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {lead.signals.map((signal, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                        >
                          {signal}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-gray-500 font-medium text-sm">Why This Lead:</span>
                    <p className="text-gray-700 mt-1">{lead.reasoning}</p>
                  </div>

                  <div>
                    <span className="text-gray-500 font-medium text-sm">Contact:</span>
                    <p className="text-gray-700 mt-1">{lead.contactInfo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {leads.length === 0 && !isScanning && (
          <div className="bg-white rounded-2xl shadow-xl p-16 text-center border border-gray-100">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No leads yet</h3>
            <p className="text-gray-500">
              Configure your filters above and click "Start Lead Scan" to find qualified leads
            </p>
          </div>
        )}

        {/* Footer Info */}
        <div className="mt-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-6 border border-purple-200">
          <h3 className="font-bold text-gray-800 mb-3">How It Works:</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>✓ <strong>Smart Filtering:</strong> Focus on accounts matching your exact criteria (location, industry, followers, age)</li>
            <li>✓ <strong>Brand Detection:</strong> Only surfaces verified brand/startup accounts, not influencers or personal pages</li>
            <li>✓ <strong>Founder Signals:</strong> Prioritizes accounts with founder mentions and collaboration indicators</li>
            <li>✓ <strong>Engagement Analysis:</strong> Calculates engagement rate to identify active, growing brands</li>
            <li>✓ <strong>Priority Scoring:</strong> AI ranks leads by likelihood to need branding/cinematic content services</li>
            <li>✓ <strong>Export Ready:</strong> Download complete lead list with reasoning and contact info as CSV</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
