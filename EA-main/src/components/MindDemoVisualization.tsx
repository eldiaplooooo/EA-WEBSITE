import React, { useState, useEffect } from 'react';
import { 
  X, 
  Brain, 
  Database, 
  Zap, 
  Shield, 
  Globe, 
  Users, 
  TrendingUp, 
  Cog,
  ArrowRight,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

interface MindDemoVisualizationProps {
  isOpen: boolean;
  onClose: () => void;
}

const MindDemoVisualization: React.FC<MindDemoVisualizationProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);

  const steps = [
    {
      id: 1,
      title: 'Data Ingestion',
      description: 'MIND collects and processes data from multiple sources across your organization',
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
      position: { x: 10, y: 20 },
      details: [
        'Real-time data collection',
        'Multi-source integration',
        'Automated preprocessing',
        'Quality validation'
      ]
    },
    {
      id: 2,
      title: 'AI Processing',
      description: 'Advanced neural networks analyze patterns and extract meaningful insights',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      position: { x: 35, y: 10 },
      details: [
        'Neural network analysis',
        'Pattern recognition',
        'Predictive modeling',
        'Context understanding'
      ]
    },
    {
      id: 3,
      title: 'Smart Automation',
      description: 'Intelligent automation executes optimized workflows and processes',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      position: { x: 60, y: 20 },
      details: [
        'Workflow automation',
        'Process optimization',
        'Task scheduling',
        'Resource allocation'
      ]
    },
    {
      id: 4,
      title: 'Security Layer',
      description: 'Enterprise-grade security ensures data protection and compliance',
      icon: Shield,
      color: 'from-green-500 to-teal-500',
      position: { x: 85, y: 35 },
      details: [
        'Zero-trust architecture',
        'End-to-end encryption',
        'Compliance monitoring',
        'Access control'
      ]
    },
    {
      id: 5,
      title: 'Integration Hub',
      description: 'Seamless integration with existing systems and third-party platforms',
      icon: Globe,
      color: 'from-indigo-500 to-blue-500',
      position: { x: 75, y: 60 },
      details: [
        'API connectivity',
        'System integration',
        'Data synchronization',
        'Platform compatibility'
      ]
    },
    {
      id: 6,
      title: 'User Interface',
      description: 'Intuitive interfaces provide easy access to AI-powered insights and controls',
      icon: Users,
      color: 'from-pink-500 to-rose-500',
      position: { x: 45, y: 70 },
      details: [
        'Intuitive dashboards',
        'Mobile accessibility',
        'Voice commands',
        'Personalized views'
      ]
    },
    {
      id: 7,
      title: 'Analytics Engine',
      description: 'Real-time analytics and reporting provide actionable business intelligence',
      icon: TrendingUp,
      color: 'from-emerald-500 to-green-500',
      position: { x: 15, y: 55 },
      details: [
        'Real-time analytics',
        'Predictive insights',
        'Performance metrics',
        'Custom reporting'
      ]
    },
    {
      id: 8,
      title: 'Continuous Learning',
      description: 'MIND continuously learns and adapts to improve performance over time',
      icon: Cog,
      color: 'from-violet-500 to-purple-500',
      position: { x: 30, y: 40 },
      details: [
        'Machine learning',
        'Performance optimization',
        'Adaptive algorithms',
        'Self-improvement'
      ]
    }
  ];

  const connections = [
    { from: 0, to: 1 }, // Data Ingestion → AI Processing
    { from: 1, to: 2 }, // AI Processing → Smart Automation
    { from: 2, to: 3 }, // Smart Automation → Security Layer
    { from: 3, to: 4 }, // Security Layer → Integration Hub
    { from: 4, to: 5 }, // Integration Hub → User Interface
    { from: 5, to: 6 }, // User Interface → Analytics Engine
    { from: 6, to: 7 }, // Analytics Engine → Continuous Learning
    { from: 7, to: 1 }, // Continuous Learning → AI Processing (feedback loop)
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setAnimationProgress(prev => {
          if (prev >= 100) {
            setCurrentStep(prevStep => (prevStep + 1) % steps.length);
            return 0;
          }
          return prev + 2;
        });
      }, 50);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, steps.length]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setAnimationProgress(0);
  };

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
    setIsPlaying(false);
    setAnimationProgress(0);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div>
            <h2 className="text-2xl font-bold">MIND Technology Demo</h2>
            <p className="text-purple-100">Interactive visualization of how MIND AI works</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row h-[calc(90vh-120px)]">
          {/* Visualization Area */}
          <div className="flex-1 relative bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 overflow-hidden">
            {/* SVG Canvas */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
              {/* Background Grid */}
              <defs>
                <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
                  <path d="M 5 0 L 0 0 0 5" fill="none" stroke="rgba(99, 102, 241, 0.1)" strokeWidth="0.2"/>
                </pattern>
                
                {/* Gradient Definitions */}
                {steps.map((step, index) => (
                  <linearGradient key={index} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={step.color.split(' ')[1]} />
                    <stop offset="100%" stopColor={step.color.split(' ')[3]} />
                  </linearGradient>
                ))}
                
                {/* Glow Filter */}
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              <rect width="100" height="100" fill="url(#grid)" />
              
              {/* Connection Lines */}
              {connections.map((connection, index) => {
                const fromStep = steps[connection.from];
                const toStep = steps[connection.to];
                const isActive = currentStep === connection.from || currentStep === connection.to;
                
                return (
                  <line
                    key={index}
                    x1={fromStep.position.x}
                    y1={fromStep.position.y}
                    x2={toStep.position.x}
                    y2={toStep.position.y}
                    stroke={isActive ? "url(#gradient-" + connection.from + ")" : "rgba(156, 163, 175, 0.3)"}
                    strokeWidth={isActive ? "0.5" : "0.2"}
                    strokeDasharray={isActive ? "1,0.5" : "none"}
                    filter={isActive ? "url(#glow)" : "none"}
                    className={isActive ? "animate-pulse" : ""}
                  />
                );
              })}
              
              {/* Data Flow Animation */}
              {isPlaying && connections.map((connection, index) => {
                if (currentStep !== connection.from) return null;
                
                const fromStep = steps[connection.from];
                const toStep = steps[connection.to];
                const progress = animationProgress / 100;
                const x = fromStep.position.x + (toStep.position.x - fromStep.position.x) * progress;
                const y = fromStep.position.y + (toStep.position.y - fromStep.position.y) * progress;
                
                return (
                  <circle
                    key={`flow-${index}`}
                    cx={x}
                    cy={y}
                    r="0.8"
                    fill={`url(#gradient-${connection.from})`}
                    filter="url(#glow)"
                    className="animate-pulse"
                  />
                );
              })}
              
              {/* Step Nodes */}
              {steps.map((step, index) => {
                const isActive = currentStep === index;
                const IconComponent = step.icon;
                
                return (
                  <g key={index}>
                    {/* Node Circle */}
                    <circle
                      cx={step.position.x}
                      cy={step.position.y}
                      r={isActive ? "4" : "3"}
                      fill={`url(#gradient-${index})`}
                      stroke="white"
                      strokeWidth={isActive ? "0.5" : "0.3"}
                      filter={isActive ? "url(#glow)" : "none"}
                      className={`cursor-pointer transition-all duration-300 ${isActive ? 'animate-pulse' : ''}`}
                      onClick={() => handleStepClick(index)}
                    />
                    
                    {/* Step Number */}
                    <text
                      x={step.position.x}
                      y={step.position.y + 0.5}
                      textAnchor="middle"
                      fontSize="2"
                      fill="white"
                      fontWeight="bold"
                      className="pointer-events-none"
                    >
                      {step.id}
                    </text>
                    
                    {/* Step Label */}
                    <text
                      x={step.position.x}
                      y={step.position.y - 6}
                      textAnchor="middle"
                      fontSize="1.5"
                      fill="currentColor"
                      className={`pointer-events-none font-medium ${isActive ? 'text-purple-600 dark:text-purple-400' : 'text-gray-600 dark:text-gray-400'}`}
                    >
                      {step.title}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Controls */}
            <div className="absolute bottom-4 left-4 flex items-center space-x-2">
              <button
                onClick={handlePlay}
                className={`p-3 rounded-full shadow-lg transition-all duration-300 ${
                  isPlaying 
                    ? 'bg-red-500 hover:bg-red-600 text-white' 
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </button>
              <button
                onClick={handleReset}
                className="p-3 bg-gray-500 hover:bg-gray-600 text-white rounded-full shadow-lg transition-all duration-300"
              >
                <RotateCcw className="h-5 w-5" />
              </button>
            </div>

            {/* Progress Indicator */}
            {isPlaying && (
              <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg">
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  Step {currentStep + 1} of {steps.length}
                </div>
                <div className="w-24 h-1 bg-gray-200 dark:bg-gray-700 rounded-full mt-1">
                  <div 
                    className="h-1 bg-purple-500 rounded-full transition-all duration-100"
                    style={{ width: `${animationProgress}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Details Panel */}
          <div className="w-full lg:w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                {React.createElement(steps[currentStep].icon, {
                  className: `h-8 w-8 text-transparent bg-gradient-to-br ${steps[currentStep].color} bg-clip-text`
                })}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {steps[currentStep].title}
                  </h3>
                  <div className="text-sm text-purple-600 dark:text-purple-400">
                    Step {currentStep + 1} of {steps.length}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {steps[currentStep].description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {steps[currentStep].details.map((detail, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${steps[currentStep].color}`} />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step Navigation */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                  All Steps
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {steps.map((step, index) => {
                    const IconComponent = step.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => handleStepClick(index)}
                        className={`p-3 rounded-lg text-left transition-all duration-200 ${
                          currentStep === index
                            ? 'bg-purple-100 dark:bg-purple-900/30 border-2 border-purple-500'
                            : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border-2 border-transparent'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <IconComponent className={`h-4 w-4 ${
                            currentStep === index 
                              ? 'text-purple-600 dark:text-purple-400' 
                              : 'text-gray-500 dark:text-gray-400'
                          }`} />
                          <span className={`text-xs font-medium ${
                            currentStep === index 
                              ? 'text-purple-900 dark:text-purple-100' 
                              : 'text-gray-700 dark:text-gray-300'
                          }`}>
                            {step.title}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindDemoVisualization;