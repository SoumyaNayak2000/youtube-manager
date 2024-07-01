import React from 'react';
import {
  Avatar,
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  Spacer,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

const Home = () => {
  // Dummy data for demonstration
  const user = {
    username: 'john_doe',
    fullName: 'John Doe',
    avatar: 'https://via.placeholder.com/150', // Example URL for avatar image
    coverImage: 'https://via.placeholder.com/600x200', // Example URL for cover image
    members: ['User1', 'User2', 'User3'],
  };
  // const user = {
  //   username: 'john_doe',
  //   email: 'john.doe@example.com',
  //   avatar: 'https://via.placeholder.com/150', // Example URL for avatar image
  // };

  const workspaces = [
    { id: 1, name: 'Workspace A', members: ['User1', 'User2', 'User3'] },
    { id: 2, name: 'Workspace B', members: ['User4', 'User5'] },
    // Add more workspace details as needed
  ];

  const recentActivities = [
    { id: 1, type: 'Upload', title: 'Video 1', date: '2024-07-05' },
    { id: 2, type: 'Approval', title: 'Video 2', date: '2024-07-04' },
    // Add more recent activities as needed
  ];

  const notifications = [
    { id: 1, message: 'New video uploaded: Video 3', date: '2024-07-03' },
    { id: 2, message: 'Workspace A: New member joined - User6', date: '2024-07-02' },
    // Add more notifications as needed
  ];

  const analytics = {
    totalVideos: 25,
    uploadsToday: 3,
    approvalsPending: 2,
    // Add more analytics data as needed
  };

  return (
    <Container maxW="container.xl" py={8}>
      {/* Cover Image */}
      <Box
        bgImage={`url(${user.coverImage})`}
        bgSize="cover"
        bgPosition="center"
        h="200px"
        mb={6}
      />

      {/* Profile Information */}
      <Box p={4} shadow="md" borderWidth="1px">
        <HStack spacing={4} align="flex-start">
          {/* Avatar */}
          <Avatar size="xl" src={user.avatar} />

          <VStack align="flex-start" spacing={2}>
            {/* Username and Full Name */}
            <Heading size="lg">{user.username}</Heading>
            <Text fontSize="lg">{user.fullName}</Text>

            {/* Members (if applicable) */}
            {user.members.length > 0 && (
              <Box mt={2}>
                <Heading size="sm">Members:</Heading>
                <Text>{user.members.join(', ')}</Text>
              </Box>
            )}

            {/* Add/Edit Profile Button - Example */}
            {/* <Button colorScheme="purple">Edit Profile</Button> */}
          </VStack>
        </HStack>
      </Box>

      <Stack spacing={6}>
     

        {/* Workspaces Section */}
        <Box p={4} shadow="md" borderWidth="1px">
          <Heading size="md" mb={4}>Your Workspaces</Heading>
          {workspaces.map(workspace => (
            <Box key={workspace.id} p={3} borderWidth="1px" borderRadius="md">
              <Text fontWeight="bold">{workspace.name}</Text>
              <Text fontSize="sm">Members: {workspace.members.join(', ')}</Text>
              {/* Add actions (edit, delete, invite) if needed */}
            </Box>
          ))}
        </Box>

        {/* Recent Activities Section */}
        <Box p={4} shadow="md" borderWidth="1px">
          <Heading size="md" mb={4}>Recent Activities</Heading>
          {recentActivities.map(activity => (
            <Box key={activity.id} p={3} borderWidth="1px" borderRadius="md">
              <Text>{activity.type} - {activity.title}</Text>
              <Text fontSize="sm">Date: {activity.date}</Text>
              {/* Add details or actions related to activities */}
            </Box>
          ))}
        </Box>

        {/* Notifications Section */}
        <Box p={4} shadow="md" borderWidth="1px">
          <Heading size="md" mb={4}>Notifications</Heading>
          {notifications.map(notification => (
            <Box key={notification.id} p={3} borderWidth="1px" borderRadius="md">
              <Text>{notification.message}</Text>
              <Text fontSize="sm">Date: {notification.date}</Text>
            </Box>
          ))}
        </Box>

        {/* Analytics Section */}
        <Box p={4} shadow="md" borderWidth="1px">
          <Heading size="md" mb={4}>Analytics</Heading>
          <VStack align="flex-start" spacing={2}>
            <Text>Total Videos: {analytics.totalVideos}</Text>
            <Text>Uploads Today: {analytics.uploadsToday}</Text>
            <Text>Approvals Pending: {analytics.approvalsPending}</Text>
            {/* Add more analytics data as needed */}
          </VStack>
        </Box>

        {/* Settings Section - Placeholder */}
        <Box p={4} shadow="md" borderWidth="1px">
          <Heading size="md" mb={4}>Settings</Heading>
          <Text>Placeholder for settings content...</Text>
        </Box>
      </Stack>
    </Container>
  );
};

export default Home;
