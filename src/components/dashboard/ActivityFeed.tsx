
import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Activity {
  id: string;
  title: string;
  description: string;
  time: string;
  type: 'lead' | 'property' | 'payment' | 'document';
  user?: {
    name: string;
    avatar?: string;
  };
}

const activityTypeConfig: Record<Activity['type'], { icon: React.ReactNode; color: string }> = {
  lead: {
    icon: <User className="h-4 w-4" />,
    color: 'bg-blue-100 text-blue-800',
  },
  property: {
    icon: <Calendar className="h-4 w-4" />,
    color: 'bg-green-100 text-green-800',
  },
  payment: {
    icon: <Clock className="h-4 w-4" />,
    color: 'bg-amber-100 text-amber-800',
  },
  document: {
    icon: <Calendar className="h-4 w-4" />,
    color: 'bg-purple-100 text-purple-800',
  },
};

interface ActivityFeedProps {
  activities: Activity[];
}

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ activities }) => {
  return (
    <Card className="h-[calc(100%-2rem)]">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <Badge
                variant="secondary"
                className={`rounded-full p-1.5 ${activityTypeConfig[activity.type].color}`}
              >
                {activityTypeConfig[activity.type].icon}
              </Badge>
              
              <div className="space-y-1">
                <p className="font-medium">{activity.title}</p>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
                
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="mr-1 h-3 w-3" />
                  {activity.time}
                  
                  {activity.user && (
                    <>
                      <span className="mx-1">•</span>
                      <div className="flex items-center">
                        <Avatar className="h-4 w-4 mr-1">
                          <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                          <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {activity.user.name}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
