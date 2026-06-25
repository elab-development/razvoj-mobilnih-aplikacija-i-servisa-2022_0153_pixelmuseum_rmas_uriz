import {
    openBrowserAsync,
    WebBrowserPresentationStyle,
} from "expo-web-browser";
import type * as React from "react";
import { Linking, Platform, Pressable } from "react-native";

type Props = Omit<React.ComponentProps<typeof Pressable>, "onPress"> & {
  href: string;
  asChild?: boolean;
};

export function ExternalLink({ href, asChild, ...rest }: Props) {
  async function handlePress() {
    if (Platform.OS === "web") {
      await Linking.openURL(href);
    } else {
      await openBrowserAsync(href, {
        presentationStyle: WebBrowserPresentationStyle.AUTOMATIC,
      });
    }
  }

  return <Pressable {...rest} onPress={handlePress} />;
}
