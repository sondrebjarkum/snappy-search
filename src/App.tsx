import { Stack } from '@hope-ui/solid';
import { FiBox, FiLayout, FiUsers } from 'solid-icons/fi';
import { Component, createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';
import Layout from './components/Layouts/Layout';
import { Letter } from './components/SnappySearch/SnappyGrid';
import SnappySearch from './components/SnappySearch/SnappySearch';
import { extractUniqueLetters } from './helpers/extract-letters';
import { apps } from './mock data/apps';
import { people as peopleMockdata } from './mock data/people';
import { websites } from './mock data/websites';


const App: Component = () => {
  const [applications, setApplications] = createStore([...apps])
  const [people, setPeople] = createStore([...peopleMockdata])
  const [webpage, setWebpage] = createSignal("")

  return (
    <Layout>
      <Stack justifyContent="flex-end" w="100%" spacing={"$4"} background={"$neutral5"} p="$2">
        <SnappySearch
          items={applications}
          letters={extractUniqueLetters<Letter>(apps.map(item => item.name))}
          icon={<FiBox size={24} />}
          align="right"
        />
        <SnappySearch
          items={people}
          letters={extractUniqueLetters<Letter>(people.map(item => item.name))}
          icon={<FiUsers size={24} />}
          align="right"
          onBlur='keep-open'
          itemAction={(action) => console.log(action)}
        />
        <SnappySearch
          items={websites}
          letters={extractUniqueLetters<Letter>(websites.map(item => item.name))}
          icon={<FiLayout size={24} />}
          align="right"
          itemAction={(action) => setWebpage(action)}
        />


      </Stack>
      <iframe width={500} height={500} src={webpage()}></iframe>
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