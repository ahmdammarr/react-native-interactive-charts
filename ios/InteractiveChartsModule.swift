//
//  InteractiveChartsModule.swift
//  InteractiveChartsModule
//
//  Copyright © 2021 Ahmed Ammarr. All rights reserved.
//

import Foundation

@objc(InteractiveChartsModule)
class InteractiveChartsModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
