import { Image, View } from "@tarojs/components";

import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import "./index.scss";
import GlobalFooter from "../../components/GlobalFooter";
import headerBg from "../../assets/background.png";
import questionResult from "../../data/question_results.json";
import question from "../../data/questions.json";
import { getBestResult } from "../../utils/bizUtils";

/**
 * 结果页
 */
export default () => {
  const answerList = Taro.getStorageSync("answerList");
  if (!answerList || answerList.length === 0) {
    Taro.showToast({
      title: "失败",
      icon: "error",
      duration: 3000,
    });
  }
  const result = getBestResult(answerList, question, questionResult);
  return (
    <View className="resultPage">
      <View className="at-article__h1 title">{result.resultName}</View>
      <View className="at-article__h3 subTitle">{result.resultDesc}</View>
      <AtButton
        type="primary"
        size="normal"
        className="enterBtn"
        circle
        onClick={() => {
          //关闭所有页面，打开到应用内的某个页面
          Taro.reLaunch({
            url: "/pages/index/index",
          });
        }}
      >
        返回主页
      </AtButton>
      <Image src={headerBg} style={{ width: "100%" }} mode="aspectFill" />
      <GlobalFooter />
    </View>
  );
};
