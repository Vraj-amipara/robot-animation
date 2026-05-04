export interface Solution {
  id: string;
  industry: string;
  icon: string;
  heroImage: string;
  problem: string;
  solution: string;
  stats: { label: string; value: string }[];
  caseStudy: {
    client: string;
    description: string;
    results: string[];
  };
}

export const solutions: Solution[] = [
  {
    id: 'manufacturing',
    industry: 'Manufacturing',
    icon: 'Factory',
    heroImage: 'https://radii.co/wp-content/uploads/2025/03/radii-agibot-robotics-00.jpg',
    problem: 'Assembly lines struggle with labor shortages, high error rates in repetitive tasks, and the inability to quickly adapt to new hardware models without massive re-tooling downtime.',
    solution: 'NEXORA Articulated and SCARA robots provide sub-millimeter precision 24/7. With our AI-driven vision systems, robots adapt to orientation changes instantly, drastically cutting down defects and improving throughput.',
    stats: [
      { label: 'Throughput Increase', value: '+45%' },
      { label: 'Defect Reduction', value: '-80%' },
      { label: 'Setup Time', value: '< 2 hrs' }
    ],
    caseStudy: {
      client: 'AutoBuild Tier-1 Supplier',
      description: 'Integrated 12 NX-Titan 6D robots for heavy chassis welding alongside 20 NX-S2 Max SCARA units for electronics mounting.',
      results: ['Achieved 99.9% uptime', 'Saved $2M in operational costs annually', 'Reduced line-changeover from 3 days to 4 hours']
    }
  },
  {
    id: 'healthcare',
    industry: 'Healthcare',
    icon: 'Hospital',
    heroImage: 'https://news.northeastern.edu/wp-content/uploads/2025/10/Apptronik_robot_1400.jpg',
    problem: 'Nursing staff spend up to 30% of their shifts handling non-patient tasks such as fetching supplies, delivering lab samples, and managing inventory.',
    solution: 'NEXORA AMR and Humanoid lines navigate hospital corridors autonomously, securing transporting sensitive materials, allowing nurses to return to direct patient care.',
    stats: [
      { label: 'Nurses Time Saved', value: '3 hrs/day' },
      { label: 'Delivery Accuracy', value: '100%' },
      { label: 'Payload Capacity', value: '50 kg' }
    ],
    caseStudy: {
      client: 'Mercy General Hospital',
      description: 'Deployed a fleet of 10 NX-AMR-50 units to coordinate lab sample deliveries and pharmacy distributions across a 5-building campus.',
      results: ['Reduced lab turnaround time by 22%', 'Zero lost or misrouted samples', 'Boosted staff satisfaction scores by 40%']
    }
  },
  {
    id: 'agriculture',
    industry: 'Agriculture',
    icon: 'Tractor',
    heroImage: 'https://console.kr-asia.com/wp-content/uploads/2025/01/Boston-Dynamics-Atlas.jpg',
    problem: 'Global labor shortages and unpredictable climate conditions make crop harvesting and monitoring increasingly difficult and inefficient.',
    solution: 'Autonomous drones and mobile manipulators can operate 24/7 outdoors, using multi-spectral cameras and soft-touch end effectors to monitor crop health and harvest delicate produce.',
    stats: [
      { label: 'Yield Increase', value: '+15%' },
      { label: 'Labor Cost Reduction', value: '-60%' },
      { label: 'Scouting Area', value: '10k Acres/day' }
    ],
    caseStudy: {
      client: 'GreenValley Orchards',
      description: 'Piloted NX-Aero Inspector drones with NX-Mobility Arms to scan apple orchards and perform selective harvesting based on ripeness AI models.',
      results: ['Reduced crop waste by 18%', 'Operated smoothly in low-light and fog', 'Decreased pesticide usage by targeted spraying']
    }
  },
  {
    id: 'construction',
    industry: 'Construction',
    icon: 'HardHat',
    heroImage: 'https://www.cio.com/wp-content/uploads/2025/02/3829539-0-75501800-1740132217-shutterstock_2482705481.jpg?quality=50&strip=all',
    problem: 'Construction sites are dangerous, constantly changing environments where heavy lifting leads to injuries and labor shortages delay project timelines.',
    solution: 'Heavy-duty Hybrid and AGV platforms automate material transport over rough terrain, while structural articulated arms assist in automated bricklaying and welding.',
    stats: [
      { label: 'Safety Incidents', value: '-75%' },
      { label: 'Material Transport Speed', value: '+30%' },
      { label: 'ROI Time', value: '14 mo' }
    ],
    caseStudy: {
      client: 'Skyline Builders Inc.',
      description: 'Integrated NX-Goliath Hybrid units for moving heavy steel beams and performing on-site automated welding at a skyscraper project.',
      results: ['Zero lifting injuries reported in 12 months', 'Accelerated phase 1 completion by 3 weeks', 'Consistent weld quality verified by NDT']
    }
  },
  {
    id: 'logistics',
    industry: 'Logistics/Warehouse',
    icon: 'Package',
    heroImage: 'https://www.therobotreport.com/wp-content/uploads/2025/06/hexagon-aeon-featured.jpg',
    problem: 'E-commerce demand requires massive throughput. Traditional warehouses suffer from picker travel time, which accounts for 50% of working hours.',
    solution: 'A cohesive swarm of NX AMRs and AGVs orchestrate dynamic goods-to-person workflows, integrating directly with WMS for seamless order fulfillment.',
    stats: [
      { label: 'Order Picking Speed', value: '3x Faster' },
      { label: 'Space Utilization', value: '+40%' },
      { label: 'System Uptime', value: '99.9%' }
    ],
    caseStudy: {
      client: 'PrimeLogistics Global',
      description: 'Retrofitted a 500,000 sq ft facility with 120 NX-AMR-150s, entirely replacing manual forklifts in the pick aisles.',
      results: ['Handled Black Friday peak with zero delays', 'Reduced facility accidents by 90%', 'Lowered HVAC costs due to "dark warehouse" capabilities']
    }
  },
  {
    id: 'space_defense',
    industry: 'Space/Defense',
    icon: 'Rocket',
    heroImage: 'https://robotics.hexagon.com/wp-content/uploads/2025/05/AEON_-_SIDEHEAD_03_0045-medium.png',
    problem: 'Operating in extreme, high-radiation, or hostile environments is too dangerous for human personnel or traditional machinery.',
    solution: 'Rad-hardened Autonomous platforms and teleoperated Humanoids equipped with redundant systems provide reliable exploration and bomb disposal capabilities.',
    stats: [
      { label: 'Operation Range', value: 'Unlimited (Sat)' },
      { label: 'Radiation Tolerance', value: '100k rads' },
      { label: 'Deployment Time', value: '< 5 min' }
    ],
    caseStudy: {
      client: 'AeroSpace Defense Agency',
      description: 'Modified NX-Atlas Humanoids to perform maintenance on satellite arrays in high orbit simulation chambers.',
      results: ['Completed 40 complex tool operations autonomously', 'Maintained functionality during EMP testing', 'Drastically reduced human risk profile']
    }
  }
];
