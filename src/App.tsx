import { Box, Flex, IconButton, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Stack } from '@hope-ui/solid';
import { children, Component, createEffect, createSignal, For, Show } from 'solid-js';
import { createStore } from 'solid-js/store';
import Layout from './components/Layouts/Layout';
import { extractUniqueLetters } from './helpers/extract-letters';
import stores from './helpers/stores';
import { apps } from './mock data/apps';
import AppView, { Letter } from './components/Layouts/AppView';
import { BoxIcon } from './solid-feather-icons';
import { Transition } from 'solid-transition-group';
import { hope } from "@hope-ui/solid"
import SnappySearch from './components/SnappySearch/SnappySearch';


const App: Component = () => {
  const letters = extractUniqueLetters<Letter>(apps.map(item => item.name))
  const { sortLetter, setSortLetter } = stores
  const [applications, setApplications] = createStore([...apps])

  createEffect(() => {
    sortLetter().toUpperCase() == "ALL"
      ? setApplications([...apps])
      : setApplications(apps.filter(e => e.name.charAt(0).toUpperCase() == sortLetter() && e))
  })

  // const handleToggleDrawer = () => {
  //   setDrawerOpen(prev => !prev)
  //   drawerOpen() && setSortLetter("All")
  // }
  const handleToggleDrawer = (e: boolean) => e && setSortLetter("All")

  return (
    <Layout>
      <Stack justifyContent="flex-end" w="100%" background={"red"}>
        <SnappySearch
          items={applications}
          letters={letters}
          isOpen={(e: boolean) => handleToggleDrawer(e)}
        />

      </Stack>
      <p>jasjs</p>
      <h1>asdasdasdd</h1>
    </Layout>
  );
};

export default App;



{/* <Stack position={"relative"} direction="column">
          <IconButton onClick={handleToggleDrawer} aria-label="Apps" icon={<BoxIcon />} />
          <Box position={"relative"}>
            <Transition
              onEnter={(el, done) => {
                const a = el.animate([{ opacity: 0 }, { opacity: 1 }], {
                  duration: 200
                });
                a.finished.then(done);
              }}
              onExit={(el, done) => {
                const a = el.animate([{ opacity: 1 }, { opacity: 0 }], {
                  duration: 200
                });
                a.finished.then(done);
              }}
            >
              {drawerOpen() && <AppView letters={letters} apps={applications} align="right" />}
            </Transition>
          </Box>
        </Stack> */}