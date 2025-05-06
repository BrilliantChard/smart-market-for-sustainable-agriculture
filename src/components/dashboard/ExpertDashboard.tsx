
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, MessageSquare, Users, BarChart } from 'lucide-react';

// Mock data for expert dashboard
const expertStats = {
  totalArticles: 24,
  questionsAnswered: 156,
  totalFollowers: 487,
  impactScore: 92,
};

const recentQuestions = [
  { id: 'Q-123', farmer: 'John Smith', question: 'What's the best way to control aphids on my tomato plants?', status: 'Unanswered', date: '2025-05-05' },
  { id: 'Q-122', farmer: 'Maria Garcia', question: 'When is the best time to plant onions in Zone 7?', status: 'Answered', date: '2025-05-04' },
  { id: 'Q-121', farmer: 'Ahmed Hassan', question: 'My cucumber leaves are turning yellow, what could be the cause?', status: 'Answered', date: '2025-05-03' },
];

const upcomingEvents = [
  { id: 1, title: 'Webinar: Sustainable Pest Management', date: '2025-05-10', time: '2:00 PM', attendees: 45 },
  { id: 2, title: 'Live Q&A: Organic Certification', date: '2025-05-15', time: '3:30 PM', attendees: 32 },
  { id: 3, title: 'Workshop: Soil Health Basics', date: '2025-05-20', time: '10:00 AM', attendees: 28 },
];

const ExpertDashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Expert Dashboard</h2>
      
      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Articles Published
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{expertStats.totalArticles}</div>
            <p className="text-xs text-muted-foreground mt-1">
              5 this month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Questions Answered
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{expertStats.questionsAnswered}</div>
            <p className="text-xs text-muted-foreground mt-1">
              12 awaiting response
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Followers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{expertStats.totalFollowers}</div>
            <p className="text-xs text-muted-foreground mt-1">
              +23 this week
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Impact Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{expertStats.impactScore}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Based on farmer feedback
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Quick actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Button className="flex flex-col items-center justify-center h-24 gap-2">
              <FileText className="h-8 w-8" />
              <span>Write New Article</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center justify-center h-24 gap-2">
              <MessageSquare className="h-8 w-8" />
              <span>Answer Questions</span>
            </Button>
            <Button variant="secondary" className="flex flex-col items-center justify-center h-24 gap-2">
              <Users className="h-8 w-8" />
              <span>Schedule Event</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center justify-center h-24 gap-2">
              <BarChart className="h-8 w-8" />
              <span>View Analytics</span>
            </Button>
          </CardContent>
        </Card>
        
        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map(event => (
                <div key={event.id} className="flex flex-col sm:flex-row justify-between p-3 border rounded-md hover:bg-gray-50 transition-colors">
                  <div>
                    <h4 className="font-medium text-sm">{event.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{event.date} at {event.time}</p>
                  </div>
                  <div className="mt-2 sm:mt-0 flex items-center">
                    <div className="flex items-center text-xs text-gray-500 mr-4">
                      <Users size={12} className="mr-1" />
                      <span>{event.attendees} registered</span>
                    </div>
                    <Button size="sm" variant="outline">Manage</Button>
                  </div>
                </div>
              ))}
              <Button variant="link" className="w-full">Schedule a new event</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Recent questions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentQuestions.map(question => (
              <div key={question.id} className="border rounded-md p-4">
                <div className="flex justify-between">
                  <h4 className="font-medium">From: {question.farmer}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    question.status === 'Answered' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {question.status}
                  </span>
                </div>
                <p className="mt-2 text-gray-700">{question.question}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs text-gray-500">{question.date}</span>
                  <Button size="sm" variant={question.status === 'Answered' ? 'outline' : 'default'}>
                    {question.status === 'Answered' ? 'View Answer' : 'Answer'}
                  </Button>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">View All Questions</Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Article suggestions */}
      <Card>
        <CardHeader>
          <CardTitle>Suggested Article Topics</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center justify-between">
              <span>Crop rotation techniques for small farms</span>
              <Button variant="ghost" size="sm">Write</Button>
            </li>
            <li className="flex items-center justify-between">
              <span>Water conservation strategies during drought</span>
              <Button variant="ghost" size="sm">Write</Button>
            </li>
            <li className="flex items-center justify-between">
              <span>Natural pest control for organic farming</span>
              <Button variant="ghost" size="sm">Write</Button>
            </li>
            <li className="flex items-center justify-between">
              <span>Understanding soil pH and nutrients</span>
              <Button variant="ghost" size="sm">Write</Button>
            </li>
          </ul>
          <p className="text-sm text-gray-500 mt-4">
            These topics are trending among farmer questions and searches.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExpertDashboard;
