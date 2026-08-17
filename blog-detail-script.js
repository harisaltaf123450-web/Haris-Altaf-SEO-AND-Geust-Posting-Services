// Blog data (same as in blog-script.js)
const blogsData = [
    {
        id: 1,
        title: 'Top 10 SEO Ranking Factors in 2024',
        date: 'August 15, 2024',
        image: 'https://via.placeholder.com/800x400/667eea/ffffff?text=SEO+Ranking+Factors',
        category: 'SEO Tips',
        author: 'Haris Altaf',
        readTime: '8 min read',
        excerpt: 'Discover the most important SEO factors that search engines use to rank websites. Learn how to optimize each factor for better visibility.',
        content: `<h2>Top 10 SEO Ranking Factors in 2024</h2>
        <p>Search engine optimization is constantly evolving, and staying updated with the latest ranking factors is crucial for success. In 2024, Google continues to prioritize user experience, content quality, and technical performance.</p>
        
        <h3>1. Core Web Vitals</h3>
        <p>Core Web Vitals remain a critical ranking factor. These metrics measure user experience by focusing on:</p>
        <ul>
            <li><strong>Largest Contentful Paint (LCP):</strong> How quickly the largest content element loads</li>
            <li><strong>First Input Delay (FID):</strong> How responsive your site is to user interactions</li>
            <li><strong>Cumulative Layout Shift (CLS):</strong> How stable your page layout is during loading</li>
        </ul>
        
        <h3>2. Mobile Responsiveness</h3>
        <p>With mobile-first indexing, your site's mobile version is now the primary version Google indexes. Ensure your site is fully responsive and loads quickly on mobile devices.</p>
        
        <h3>3. Content Quality and Relevance</h3>
        <p>High-quality, original content that addresses user intent remains king. Google rewards comprehensive, well-researched content that provides genuine value to readers.</p>
        
        <h3>4. Backlinks and Link Profile</h3>
        <p>Quality backlinks from authoritative sites continue to be one of the strongest ranking signals. Focus on building relationships and creating linkable content.</p>
        
        <h3>5. Domain Authority</h3>
        <p>Older domains with strong link profiles and content history tend to rank better. Building your domain's authority takes time and consistent effort.</p>
        
        <h3>6. Page Speed</h3>
        <p>Page loading speed is a confirmed ranking factor. Optimize images, minimize code, and use caching to improve your site's speed.</p>
        
        <h3>7. SSL/HTTPS Security</h3>
        <p>Google prefers secure websites. Make sure your site uses HTTPS and has a valid SSL certificate.</p>
        
        <h3>8. User Experience Signals</h3>
        <p>Bounce rate, time on page, and click-through rate are important signals that indicate content quality and relevance.</p>
        
        <h3>9. Keyword Optimization</h3>
        <p>Proper keyword placement in titles, headers, meta descriptions, and content still matters. Use keywords naturally and avoid stuffing.</p>
        
        <h3>10. Schema Markup and Structured Data</h3>
        <p>Implementing schema markup helps search engines understand your content better and can lead to rich snippets in search results.</p>
        
        <h3>Conclusion</h3>
        <p>SEO success in 2024 requires a holistic approach that combines technical optimization, content quality, and user experience. Focus on these ten factors, and you'll see improvement in your rankings over time.</p>`
    },
    {
        id: 2,
        title: 'Link Building Strategies That Actually Work',
        date: 'August 10, 2024',
        image: 'https://via.placeholder.com/800x400/f093fb/ffffff?text=Link+Building',
        category: 'Link Building',
        author: 'Haris Altaf',
        readTime: '10 min read',
        excerpt: 'Master the art of building high-quality backlinks without risking penalties. Proven strategies used by SEO professionals worldwide.',
        content: `<h2>Link Building Strategies That Actually Work</h2>
        <p>Link building remains one of the most important aspects of SEO, but many marketers are still using outdated or risky tactics. This guide will show you proven, white-hat link building strategies that deliver results.</p>
        
        <h3>1. Create Exceptional Content</h3>
        <p>The foundation of any successful link building campaign is creating content that others want to link to. This includes:</p>
        <ul>
            <li>Original research and data</li>
            <li>Comprehensive guides and tutorials</li>
            <li>Unique insights and perspectives</li>
            <li>Visual content like infographics and videos</li>
        </ul>
        
        <h3>2. Guest Posting Strategy</h3>
        <p>Write high-quality guest posts for relevant, authoritative websites. This builds relationships with other site owners and earns valuable backlinks.</p>
        
        <h3>3. Resource Link Building</h3>
        <p>Create valuable resource pages, tools, or templates that other sites naturally want to link to. Make sure your resources solve real problems for your audience.</p>
        
        <h3>4. Broken Link Building</h3>
        <p>Find broken links on authoritative sites in your niche and offer your content as a replacement. This helps webmasters fix their sites while earning you a link.</p>
        
        <h3>5. Build Relationships</h3>
        <p>Spend time connecting with influencers, journalists, and bloggers in your industry. Strong relationships often lead to natural link opportunities.</p>
        
        <h3>6. HARO and Press Releases</h3>
        <p>Use Help A Reporter Out (HARO) to provide expert insights for journalists. This can result in mentions and backlinks from major publications.</p>
        
        <h3>7. Local Link Building</h3>
        <p>If you have a physical location, get listed in local directories and collaborate with other local businesses for mutual linking opportunities.</p>
        
        <h3>What to Avoid</h3>
        <ul>
            <li>Link exchanges and reciprocal linking schemes</li>
            <li>Buying links from link farms</li>
            <li>Commenting spam and forum spam</li>
            <li>Private Blog Networks (PBNs)</li>
            <li>Keyword-stuffed anchor text</li>
        </ul>
        
        <h3>Measuring Your Success</h3>
        <p>Monitor your backlinks using tools like Ahrefs, SEMrush, or Moz. Track both the quantity and quality of your links, and watch for changes in your search rankings.</p>`
    },
    {
        id: 3,
        title: 'Content Strategy That Converts Visitors to Customers',
        date: 'August 5, 2024',
        image: 'https://via.placeholder.com/800x400/4facfe/ffffff?text=Content+Strategy',
        category: 'Content Marketing',
        author: 'Haris Altaf',
        readTime: '12 min read',
        excerpt: 'Learn how to create a content strategy that not only ranks in Google but also drives meaningful conversions for your business.',
        content: `<h2>Content Strategy That Converts Visitors to Customers</h2>
        <p>Creating content is easy. Creating content that drives conversions is an art and science. This comprehensive guide will show you how to build a content strategy that attracts, engages, and converts your target audience.</p>
        
        <h3>Step 1: Know Your Audience</h3>
        <p>Before creating any content, understand your ideal customer:</p>
        <ul>
            <li>Demographics (age, location, income)</li>
            <li>Pain points and challenges</li>
            <li>Goals and aspirations</li>
            <li>Content preferences</li>
            <li>Where they spend time online</li>
        </ul>
        
        <h3>Step 2: Develop Your Content Pillars</h3>
        <p>Define 3-5 main topics that your brand will consistently create content around. These should align with your products/services and audience interests.</p>
        
        <h3>Step 3: Create a Content Calendar</h3>
        <p>Plan your content in advance with a detailed calendar that includes topics, formats, publishing dates, and distribution channels. Consistency is key to building an audience.</p>
        
        <h3>Step 4: Implement the Content Funnel</h3>
        <p>Create content for each stage of the customer journey:</p>
        <ul>
            <li><strong>Awareness:</strong> Educational content that attracts new visitors</li>
            <li><strong>Consideration:</strong> Comparison content and case studies</li>
            <li><strong>Decision:</strong> Product guides and testimonials</li>
            <li><strong>Retention:</strong> Tips for getting the most value from your product</li>
        </ul>`
    },
    {
        id: 4,
        title: 'Technical SEO Audit Checklist',
        date: 'July 28, 2024',
        image: 'https://via.placeholder.com/800x400/a8edea/ffffff?text=Technical+SEO',
        category: 'Technical SEO',
        author: 'Haris Altaf',
        readTime: '9 min read',
        excerpt: 'A comprehensive technical SEO audit checklist to ensure your website is properly optimized for search engines.',
        content: `<h2>Technical SEO Audit Checklist</h2>
        <p>Technical SEO is the foundation of all SEO efforts. Without proper technical optimization, even great content will struggle to rank. Here's a complete checklist to audit your website.</p>`
    },
    {
        id: 5,
        title: 'Keyword Research for Beginners',
        date: 'July 20, 2024',
        image: 'https://via.placeholder.com/800x400/fecba1/ffffff?text=Keyword+Research',
        category: 'SEO Basics',
        author: 'Haris Altaf',
        readTime: '7 min read',
        excerpt: 'Learn the fundamentals of keyword research to find profitable keywords for your SEO strategy.',
        content: `<h2>Keyword Research for Beginners</h2>
        <p>Keyword research is the foundation of any successful SEO strategy. This beginner's guide will teach you how to find the right keywords to target.</p>`
    },
    {
        id: 6,
        title: 'WordPress SEO Optimization Guide',
        date: 'July 12, 2024',
        image: 'https://via.placeholder.com/800x400/a1c4ff/ffffff?text=WordPress+SEO',
        category: 'WordPress',
        author: 'Haris Altaf',
        readTime: '11 min read',
        excerpt: 'Complete guide to optimizing your WordPress website for search engines with best practices and essential plugins.',
        content: `<h2>WordPress SEO Optimization Guide</h2>
        <p>WordPress is one of the most SEO-friendly platforms available. This guide will show you how to maximize its SEO potential.</p>`
    }
];

// Get blog ID from URL params
function getBlogIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'));
}

// Find blog by ID
function getBlogById(id) {
    return blogsData.find(blog => blog.id === id);
}

// Load blog detail on page load
document.addEventListener('DOMContentLoaded', function() {
    const blogId = getBlogIdFromUrl();
    const blog = getBlogById(blogId);
    
    if (blog) {
        const blogDetailContainer = document.getElementById('blogDetailContainer');
        blogDetailContainer.innerHTML = `
            <div class="blog-hero-image" style="background-image: url('${blog.image}'); background-size: cover; background-position: center;"></div>
            <div class="blog-meta">
                <span class="blog-category">${blog.category}</span>
                <span class="blog-date"><i class="fas fa-calendar"></i> ${blog.date}</span>
                <span class="blog-author"><i class="fas fa-user"></i> ${blog.author}</span>
                <span class="blog-read-time"><i class="fas fa-clock"></i> ${blog.readTime}</span>
            </div>
            <h1>${blog.title}</h1>
            <div class="blog-body">
                ${blog.content}
            </div>
        `;
        
        // Load related blogs
        loadRelatedBlogs(blogId);
    }
    
    // Initialize mobile menu
    initMobileMenu();
});

// Load related blogs
function loadRelatedBlogs(currentBlogId) {
    const relatedBlogsContainer = document.getElementById('relatedBlogsContainer');
    const relatedBlogs = blogsData.filter(blog => blog.id !== currentBlogId).slice(0, 3);
    
    relatedBlogs.forEach(blog => {
        const blogCard = document.createElement('article');
        blogCard.className = 'blog-card';
        blogCard.innerHTML = `
            <div class="blog-image" style="background-image: url('${blog.image}'); background-size: cover; background-position: center;"></div>
            <div class="blog-content">
                <span class="blog-date">${blog.date}</span>
                <h3>${blog.title}</h3>
                <p>${blog.excerpt}</p>
                <a href="blog-detail.html?id=${blog.id}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        relatedBlogsContainer.appendChild(blogCard);
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});