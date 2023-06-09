import React from 'react';
import {
  Box,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import { useSession } from '@roq/nextjs';

export const HelpBox: React.FC = () => {
  const ownerRoles = ['Admin'];
  const roles = ['Admin', 'Regular User'];
  const applicationName = 'Beer Explorer v03';
  const tenantName = 'Account';
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  const userStories = `User Stories:

1. As an Admin, I want to be able to create an Account for my organization so that I can manage beer listings and brewery information.

2. As an Admin, I want to be able to invite other users to join my organization's Account so that they can contribute to managing beer listings and brewery information.

3. As an Admin or a user with access to the Account, I want to be able to create new beer listings with all the required details (hero image, beer type, brewery, alcohol content, brewery location, brewery history, description, interesting facts, and purchase locations) so that the application can display accurate and comprehensive information about each beer.

4. As an Admin or a user with access to the Account, I want to be able to edit existing beer listings to update or correct any information as needed, ensuring that the application always displays the most accurate and up-to-date information about each beer.

5. As an Admin or a user with access to the Account, I want to be able to delete beer listings that are no longer relevant or accurate, ensuring that the application only displays current and valid information about available beers.

6. As a Regular User, I want to be able to view a list of all available beers in the application so that I can browse and discover new beers to try.

7. As a Regular User, I want to be able to view detailed information about a selected beer, including its hero image, beer type, brewery, alcohol content, brewery location, brewery history, description, interesting facts, and purchase locations, so that I can learn more about the beer and decide if I want to try it.

8. As a Regular User, I want to be able to search for beers by various criteria (e.g., beer type, brewery, alcohol content) so that I can easily find beers that match my preferences and interests.`;

  const { session } = useSession();
  if (!process.env.NEXT_PUBLIC_SHOW_BRIEFING || process.env.NEXT_PUBLIC_SHOW_BRIEFING === 'false') {
    return null;
  }
  return (
    <Box width={1} position="fixed" left="20px" bottom="20px" zIndex={3}>
      <Popover placement="top">
        <PopoverTrigger>
          <IconButton
            aria-label="Help Info"
            icon={<FiInfo />}
            bg="blue.800"
            color="white"
            _hover={{ bg: 'blue.800' }}
            _active={{ bg: 'blue.800' }}
            _focus={{ bg: 'blue.800' }}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>App Briefing</PopoverHeader>
          <PopoverBody maxH="400px" overflowY="auto">
            <Text mb="2">Hi there!</Text>
            <Text mb="2">
              Welcome to {applicationName}, your freshly generated B2B SaaS application. This in-app briefing will guide
              you through your application. Feel free to remove this tutorial with the{' '}
              <Box as="span" bg="yellow.300" p={1}>
                NEXT_PUBLIC_SHOW_BRIEFING
              </Box>{' '}
              environment variable.
            </Text>
            <Text mb="2">You can use {applicationName} with one of these roles:</Text>
            <UnorderedList mb="2">
              {roles.map((role) => (
                <ListItem key={role}>{role}</ListItem>
              ))}
            </UnorderedList>
            {session?.roqUserId ? (
              <Text mb="2">You are currently logged in as a {session?.user?.roles?.join(', ')}.</Text>
            ) : (
              <Text mb="2">
                Right now, you are not logged in. The best way to start your journey is by signing up as{' '}
                {ownerRoles.join(', ')} and to create your first {tenantName}.
              </Text>
            )}
            <Text mb="2">
              {applicationName} was generated based on these user stories. Feel free to try them out yourself!
            </Text>
            <Box mb="2" whiteSpace="pre-wrap">
              {userStories}
            </Box>
            <Text mb="2">
              If you are happy with the results, then you can get the entire source code here:{' '}
              <Link href={githubUrl} color="cyan.500" isExternal>
                {githubUrl}
              </Link>
            </Text>
            <Text mb="2">
              Console Dashboard: For configuration and customization options, access our console dashboard. Your project
              has already been created and is waiting for your input. Check your emails for the invite.
            </Text>
            <Text mb="2">
              <Link href="https://console.roq.tech" color="cyan.500" isExternal>
                ROQ Console
              </Link>
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
