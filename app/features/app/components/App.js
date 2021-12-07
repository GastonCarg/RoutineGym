import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Button, View, Text } from 'react-native';
import { Tabs, Scene, Router, Stack, Lightbox, Actions } from 'react-native-router-flux';
import { useDispatch } from 'react-redux';

import RoutinesList from '../../routines/components/RoutinesList';
import NavBar from '../../navBar/components/NavBar';
import TabIcon from './TabIcon';
import Profiles from '../../profiles/components/Profiles'

import { changeView } from '../actions/app';

import images from '../../../constants/Images'

const App = () => {
    const [todosOpen, setTodosOpen] = useState(true);
    const dispatch = useDispatch();

    const onEnterStack = (currentView) => {
        dispatch(changeView(currentView));
    }

    return (
        <SafeAreaView style={styles.fullSize}>
            <StatusBar barStyle={'light-content'} />
            <View style={[styles.flex, styles.layoutRow, styles.centerContent]}>
                <Router>
                    <Scene key="root" navBar={NavBar}>
                        <Lightbox key={'lightbox'} hideNavBar>
                            <Tabs
                                activeTintColor={'red'}
                                showLabel={false}
                                tabBarStyle={{height:64}}
                            >
                                <Stack key="routineStack" icon={TabIcon} title="routineStack">
                                    <Scene key="routineList" initial component={RoutinesList} title="RoutineList"
                                    onEnter={() => onEnterStack('routineStack')}/>
                                </Stack>
                                <Stack key="profileStack" icon={TabIcon} title="profileStack">
                                    <Scene key="profile" component={Profiles} title="Profile"
                                    onEnter={() => onEnterStack('profileStack')}/>
                                </Stack>
                            </Tabs>
                        </Lightbox>
                    </Scene>
                </Router>
            </View>
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    fullSize: {
        width: '100%',
        height: '100%',
    },
    flex: {
        flex: 1,
    },
    layoutRow: {
        flexDirection: 'row',
    },
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;