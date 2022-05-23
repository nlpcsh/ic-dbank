import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {
  stable var currentValue : Float = 300;
  currentValue := 300;
  //stable var startTime = Time.now();
  var startTime = Time.now();
  Debug.print(debug_show(startTime));

  let id = 23243545543;
  // Debug.print(debug_show(id));

  public func topUp(amount: Float) {
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func withdrawl(amount: Float) {
    let tempValue: Float = currentValue - amount;
    if (tempValue >= 0) {
      currentValue -= amount;
      Debug.print(debug_show(currentValue));
    } else {
      Debug.print("Amount is too big");
    }
  };

  public func compound() {
    let currentTime = Time.now();
    let timeElapsedNSec = currentTime - startTime;
    let timeElapsedSec = timeElapsedNSec / 1000000000;
    currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedSec));
  };

  public query func checkBalance(): async Float {
    return currentValue;
  };

  public func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };
};
