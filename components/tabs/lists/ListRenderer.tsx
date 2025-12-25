import React from 'react';
import { View, Text, Pressable, Linking, FlatList } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { DateRange, ListType } from '@/types/ListTypes';

export const ListRenderer = ({ data }: { data: ListType[] }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }: any) => (
        <View className="my-2">
          <View className="grid grid-flow-dense grid-cols-12">
            <View className="flex-1 items-center">
              <FontAwesome name="dot-circle-o" size={24} color="white" />
              <View
                className={`w-0.5 flex-1 bg-white  ${item === data[data.length - 1] ? 'invisible' : ''}`}
              />
            </View>
            <View className="col-span-11">
              {item.experience && (
                <View>
                  <Text className="text-xl font-bold text-white">
                    {item.experience.role} @{' '}
                    <Pressable
                      className="underline"
                      onPress={() => Linking.openURL(item.experience.link)}>
                      <Text>{item.experience.location}</Text>
                    </Pressable>
                  </Text>
                </View>
              )}

              {item.project && (
                <View>
                  <Text className="text-xl font-bold text-white">
                    {item.project.name} (
                    <Pressable
                      className="underline"
                      onPress={() => Linking.openURL(item.project.link)}>
                      <Text>repo</Text>
                    </Pressable>
                    {item.project.preview ? (
                      <>
                        {' '}
                        |{' '}
                        <Pressable
                          className="underline"
                          onPress={() => Linking.openURL(item.project.preview!)}>
                          <Text>view</Text>
                        </Pressable>
                      </>
                    ) : null}
                    )
                  </Text>
                </View>
              )}

              <View>
                <Text className="text-lg italic text-white">
                  {item.dates
                    .map((dateItem: DateRange) => `${dateItem.start} - ${dateItem.end}`)
                    .join(', ')}
                </Text>
              </View>

              <View>
                <Text className="my-1 text-lg text-white">{item.description}</Text>
              </View>

              {item.project && (
                <View>
                  <Text className="text-lg font-bold text-white">Key Technologies:</Text>
                  {item.project.keyTechnologies.map((tech: string, index: number) => (
                    <Text key={index} className="ml-2 text-lg text-white">
                      • {tech}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          </View>
        </View>
      )}
    />
  );
};
