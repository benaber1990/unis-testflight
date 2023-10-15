import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ComingSoonIcon from "../miscComps/ComingSoonIcon";
import COLORS from "../misc/COLORS";
import TextCardComp from "../miscComps/TextCardComp";
import UnisFooter1 from "../miscComps/UnisFooter1";

export default function HealthSafetyScreen() {
  return (
    <View style={styles.screenStyle}>
      {/* Title */}
      <Text
        style={{
          fontSize: 16,
          color: "white",
          fontWeight: "600",
          marginBottom: 60,
        }}
      >
        Your <Text style={{ color: COLORS.mainGreen }}>UNIS HR </Text>Tools
      </Text>

      {/* Coming Soon Icons */}
      <View style={{ flexDirection: "row" }}>
        <ComingSoonIcon title="Risk Assessments" />
        <ComingSoonIcon title="Method Statements" />
      </View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <ComingSoonIcon title="ToolBox Talks" />
        <ComingSoonIcon title="Reports & Audits" />
      </View>

      <View style={{ height: 70 }} />
      {/* Text Card */}
      <TextCardComp
        backCol={COLORS.lightGreen}
        title={"Unlock more UNIS"}
        body={
          "Professional UNIS packages designed to take your construction business further"
        }
        link={"/"}
        buttonText={"Find Out More"}
        // titleColor={"white"}
        // bodyColor={"white"}
      />

      {/* Footer */}
      <View style={{ marginTop: 60 }}>
        <UnisFooter1 />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    backgroundColor: COLORS.black,
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
  },
});