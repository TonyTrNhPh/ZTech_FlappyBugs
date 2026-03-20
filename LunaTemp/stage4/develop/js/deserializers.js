var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1578 = root || request.c( 'UnityEngine.JointSpring' )
  var i1579 = data
  i1578.spring = i1579[0]
  i1578.damper = i1579[1]
  i1578.targetPosition = i1579[2]
  return i1578
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1580 = root || request.c( 'UnityEngine.JointMotor' )
  var i1581 = data
  i1580.m_TargetVelocity = i1581[0]
  i1580.m_Force = i1581[1]
  i1580.m_FreeSpin = i1581[2]
  return i1580
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1582 = root || request.c( 'UnityEngine.JointLimits' )
  var i1583 = data
  i1582.m_Min = i1583[0]
  i1582.m_Max = i1583[1]
  i1582.m_Bounciness = i1583[2]
  i1582.m_BounceMinVelocity = i1583[3]
  i1582.m_ContactDistance = i1583[4]
  i1582.minBounce = i1583[5]
  i1582.maxBounce = i1583[6]
  return i1582
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1584 = root || request.c( 'UnityEngine.JointDrive' )
  var i1585 = data
  i1584.m_PositionSpring = i1585[0]
  i1584.m_PositionDamper = i1585[1]
  i1584.m_MaximumForce = i1585[2]
  i1584.m_UseAcceleration = i1585[3]
  return i1584
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1586 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1587 = data
  i1586.m_Spring = i1587[0]
  i1586.m_Damper = i1587[1]
  return i1586
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1588 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1589 = data
  i1588.m_Limit = i1589[0]
  i1588.m_Bounciness = i1589[1]
  i1588.m_ContactDistance = i1589[2]
  return i1588
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1590 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1591 = data
  i1590.m_ExtremumSlip = i1591[0]
  i1590.m_ExtremumValue = i1591[1]
  i1590.m_AsymptoteSlip = i1591[2]
  i1590.m_AsymptoteValue = i1591[3]
  i1590.m_Stiffness = i1591[4]
  return i1590
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1592 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1593 = data
  i1592.m_LowerAngle = i1593[0]
  i1592.m_UpperAngle = i1593[1]
  return i1592
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1594 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1595 = data
  i1594.m_MotorSpeed = i1595[0]
  i1594.m_MaximumMotorTorque = i1595[1]
  return i1594
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1596 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1597 = data
  i1596.m_DampingRatio = i1597[0]
  i1596.m_Frequency = i1597[1]
  i1596.m_Angle = i1597[2]
  return i1596
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1598 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1599 = data
  i1598.m_LowerTranslation = i1599[0]
  i1598.m_UpperTranslation = i1599[1]
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1600 = root || new pc.UnityMaterial()
  var i1601 = data
  i1600.name = i1601[0]
  request.r(i1601[1], i1601[2], 0, i1600, 'shader')
  i1600.renderQueue = i1601[3]
  i1600.enableInstancing = !!i1601[4]
  var i1603 = i1601[5]
  var i1602 = []
  for(var i = 0; i < i1603.length; i += 1) {
    i1602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1603[i + 0]) );
  }
  i1600.floatParameters = i1602
  var i1605 = i1601[6]
  var i1604 = []
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1605[i + 0]) );
  }
  i1600.colorParameters = i1604
  var i1607 = i1601[7]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1607[i + 0]) );
  }
  i1600.vectorParameters = i1606
  var i1609 = i1601[8]
  var i1608 = []
  for(var i = 0; i < i1609.length; i += 1) {
    i1608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1609[i + 0]) );
  }
  i1600.textureParameters = i1608
  var i1611 = i1601[9]
  var i1610 = []
  for(var i = 0; i < i1611.length; i += 1) {
    i1610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1611[i + 0]) );
  }
  i1600.materialFlags = i1610
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1615 = data
  i1614.name = i1615[0]
  i1614.value = i1615[1]
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1619 = data
  i1618.name = i1619[0]
  i1618.value = new pc.Color(i1619[1], i1619[2], i1619[3], i1619[4])
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1623 = data
  i1622.name = i1623[0]
  i1622.value = new pc.Vec4( i1623[1], i1623[2], i1623[3], i1623[4] )
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1627 = data
  i1626.name = i1627[0]
  request.r(i1627[1], i1627[2], 0, i1626, 'value')
  return i1626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1631 = data
  i1630.name = i1631[0]
  i1630.enabled = !!i1631[1]
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1633 = data
  i1632.name = i1633[0]
  i1632.width = i1633[1]
  i1632.height = i1633[2]
  i1632.mipmapCount = i1633[3]
  i1632.anisoLevel = i1633[4]
  i1632.filterMode = i1633[5]
  i1632.hdr = !!i1633[6]
  i1632.format = i1633[7]
  i1632.wrapMode = i1633[8]
  i1632.alphaIsTransparency = !!i1633[9]
  i1632.alphaSource = i1633[10]
  i1632.graphicsFormat = i1633[11]
  i1632.sRGBTexture = !!i1633[12]
  i1632.desiredColorSpace = i1633[13]
  i1632.wrapU = i1633[14]
  i1632.wrapV = i1633[15]
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1635 = data
  i1634.position = new pc.Vec3( i1635[0], i1635[1], i1635[2] )
  i1634.scale = new pc.Vec3( i1635[3], i1635[4], i1635[5] )
  i1634.rotation = new pc.Quat(i1635[6], i1635[7], i1635[8], i1635[9])
  return i1634
}

Deserializers["MoveBehavior"] = function (request, data, root) {
  var i1636 = root || request.c( 'MoveBehavior' )
  var i1637 = data
  i1636._speed = i1637[0]
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1639 = data
  i1638.usedByComposite = !!i1639[0]
  i1638.autoTiling = !!i1639[1]
  i1638.size = new pc.Vec2( i1639[2], i1639[3] )
  i1638.edgeRadius = i1639[4]
  i1638.enabled = !!i1639[5]
  i1638.isTrigger = !!i1639[6]
  i1638.usedByEffector = !!i1639[7]
  i1638.density = i1639[8]
  i1638.offset = new pc.Vec2( i1639[9], i1639[10] )
  request.r(i1639[11], i1639[12], 0, i1638, 'material')
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1641 = data
  i1640.color = new pc.Color(i1641[0], i1641[1], i1641[2], i1641[3])
  request.r(i1641[4], i1641[5], 0, i1640, 'sprite')
  i1640.flipX = !!i1641[6]
  i1640.flipY = !!i1641[7]
  i1640.drawMode = i1641[8]
  i1640.size = new pc.Vec2( i1641[9], i1641[10] )
  i1640.tileMode = i1641[11]
  i1640.adaptiveModeThreshold = i1641[12]
  i1640.maskInteraction = i1641[13]
  i1640.spriteSortPoint = i1641[14]
  i1640.enabled = !!i1641[15]
  request.r(i1641[16], i1641[17], 0, i1640, 'sharedMaterial')
  var i1643 = i1641[18]
  var i1642 = []
  for(var i = 0; i < i1643.length; i += 2) {
  request.r(i1643[i + 0], i1643[i + 1], 2, i1642, '')
  }
  i1640.sharedMaterials = i1642
  i1640.receiveShadows = !!i1641[19]
  i1640.shadowCastingMode = i1641[20]
  i1640.sortingLayerID = i1641[21]
  i1640.sortingOrder = i1641[22]
  i1640.lightmapIndex = i1641[23]
  i1640.lightmapSceneIndex = i1641[24]
  i1640.lightmapScaleOffset = new pc.Vec4( i1641[25], i1641[26], i1641[27], i1641[28] )
  i1640.lightProbeUsage = i1641[29]
  i1640.reflectionProbeUsage = i1641[30]
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1647 = data
  i1646.name = i1647[0]
  i1646.tagId = i1647[1]
  i1646.enabled = !!i1647[2]
  i1646.isStatic = !!i1647[3]
  i1646.layer = i1647[4]
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1649 = data
  i1648.name = i1649[0]
  i1648.index = i1649[1]
  i1648.startup = !!i1649[2]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1651 = data
  i1650.aspect = i1651[0]
  i1650.orthographic = !!i1651[1]
  i1650.orthographicSize = i1651[2]
  i1650.backgroundColor = new pc.Color(i1651[3], i1651[4], i1651[5], i1651[6])
  i1650.nearClipPlane = i1651[7]
  i1650.farClipPlane = i1651[8]
  i1650.fieldOfView = i1651[9]
  i1650.depth = i1651[10]
  i1650.clearFlags = i1651[11]
  i1650.cullingMask = i1651[12]
  i1650.rect = i1651[13]
  request.r(i1651[14], i1651[15], 0, i1650, 'targetTexture')
  i1650.usePhysicalProperties = !!i1651[16]
  i1650.focalLength = i1651[17]
  i1650.sensorSize = new pc.Vec2( i1651[18], i1651[19] )
  i1650.lensShift = new pc.Vec2( i1651[20], i1651[21] )
  i1650.gateFit = i1651[22]
  i1650.commandBufferCount = i1651[23]
  i1650.cameraType = i1651[24]
  i1650.enabled = !!i1651[25]
  return i1650
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i1652 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i1653 = data
  i1652.m_RenderShadows = !!i1653[0]
  i1652.m_RequiresDepthTextureOption = i1653[1]
  i1652.m_RequiresOpaqueTextureOption = i1653[2]
  i1652.m_CameraType = i1653[3]
  var i1655 = i1653[4]
  var i1654 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i1655.length; i += 2) {
  request.r(i1655[i + 0], i1655[i + 1], 1, i1654, '')
  }
  i1652.m_Cameras = i1654
  i1652.m_RendererIndex = i1653[5]
  i1652.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1653[6] )
  request.r(i1653[7], i1653[8], 0, i1652, 'm_VolumeTrigger')
  i1652.m_VolumeFrameworkUpdateModeOption = i1653[9]
  i1652.m_RenderPostProcessing = !!i1653[10]
  i1652.m_Antialiasing = i1653[11]
  i1652.m_AntialiasingQuality = i1653[12]
  i1652.m_StopNaN = !!i1653[13]
  i1652.m_Dithering = !!i1653[14]
  i1652.m_ClearDepth = !!i1653[15]
  i1652.m_AllowXRRendering = !!i1653[16]
  i1652.m_AllowHDROutput = !!i1653[17]
  i1652.m_UseScreenCoordOverride = !!i1653[18]
  i1652.m_ScreenSizeOverride = new pc.Vec4( i1653[19], i1653[20], i1653[21], i1653[22] )
  i1652.m_ScreenCoordScaleBias = new pc.Vec4( i1653[23], i1653[24], i1653[25], i1653[26] )
  i1652.m_RequiresDepthTexture = !!i1653[27]
  i1652.m_RequiresColorTexture = !!i1653[28]
  i1652.m_Version = i1653[29]
  i1652.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i1653[30], i1652.m_TaaSettings)
  return i1652
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i1658 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i1659 = data
  i1658.m_Quality = i1659[0]
  i1658.m_FrameInfluence = i1659[1]
  i1658.m_JitterScale = i1659[2]
  i1658.m_MipBias = i1659[3]
  i1658.m_VarianceClampScale = i1659[4]
  i1658.m_ContrastAdaptiveSharpening = i1659[5]
  return i1658
}

Deserializers["DeviceManager"] = function (request, data, root) {
  var i1660 = root || request.c( 'DeviceManager' )
  var i1661 = data
  request.r(i1661[0], i1661[1], 0, i1660, 'cam')
  i1660.phoneMultiplier = i1661[2]
  i1660.tallPhoneMultiplier = i1661[3]
  i1660.tabletMultiplier = i1661[4]
  return i1660
}

Deserializers["UnityEngine.Rendering.Universal.Light2D"] = function (request, data, root) {
  var i1662 = root || request.c( 'UnityEngine.Rendering.Universal.Light2D' )
  var i1663 = data
  i1662.m_ComponentVersion = i1663[0]
  i1662.m_LightType = i1663[1]
  i1662.m_BlendStyleIndex = i1663[2]
  i1662.m_FalloffIntensity = i1663[3]
  i1662.m_Color = new pc.Color(i1663[4], i1663[5], i1663[6], i1663[7])
  i1662.m_Intensity = i1663[8]
  i1662.m_LightVolumeIntensity = i1663[9]
  i1662.m_LightVolumeIntensityEnabled = !!i1663[10]
  i1662.m_ApplyToSortingLayers = i1663[11]
  request.r(i1663[12], i1663[13], 0, i1662, 'm_LightCookieSprite')
  request.r(i1663[14], i1663[15], 0, i1662, 'm_DeprecatedPointLightCookieSprite')
  i1662.m_LightOrder = i1663[16]
  i1662.m_AlphaBlendOnOverlap = !!i1663[17]
  i1662.m_OverlapOperation = i1663[18]
  i1662.m_NormalMapDistance = i1663[19]
  i1662.m_NormalMapQuality = i1663[20]
  i1662.m_UseNormalMap = !!i1663[21]
  i1662.m_ShadowIntensityEnabled = !!i1663[22]
  i1662.m_ShadowIntensity = i1663[23]
  i1662.m_ShadowVolumeIntensityEnabled = !!i1663[24]
  i1662.m_ShadowVolumeIntensity = i1663[25]
  i1662.m_PointLightInnerAngle = i1663[26]
  i1662.m_PointLightOuterAngle = i1663[27]
  i1662.m_PointLightInnerRadius = i1663[28]
  i1662.m_PointLightOuterRadius = i1663[29]
  i1662.m_ShapeLightParametricSides = i1663[30]
  i1662.m_ShapeLightParametricAngleOffset = i1663[31]
  i1662.m_ShapeLightParametricRadius = i1663[32]
  i1662.m_ShapeLightFalloffSize = i1663[33]
  i1662.m_ShapeLightFalloffOffset = new pc.Vec2( i1663[34], i1663[35] )
  var i1665 = i1663[36]
  var i1664 = []
  for(var i = 0; i < i1665.length; i += 3) {
    i1664.push( new pc.Vec3( i1665[i + 0], i1665[i + 1], i1665[i + 2] ) );
  }
  i1662.m_ShapePath = i1664
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1669 = data
  request.r(i1669[0], i1669[1], 0, i1668, 'clip')
  request.r(i1669[2], i1669[3], 0, i1668, 'outputAudioMixerGroup')
  i1668.playOnAwake = !!i1669[4]
  i1668.loop = !!i1669[5]
  i1668.time = i1669[6]
  i1668.volume = i1669[7]
  i1668.pitch = i1669[8]
  i1668.enabled = !!i1669[9]
  return i1668
}

Deserializers["LoopGround"] = function (request, data, root) {
  var i1670 = root || request.c( 'LoopGround' )
  var i1671 = data
  i1670._speed = i1671[0]
  i1670._maxRangeX = i1671[1]
  return i1670
}

Deserializers["PipeSpawner"] = function (request, data, root) {
  var i1672 = root || request.c( 'PipeSpawner' )
  var i1673 = data
  i1672._maxTime = i1673[0]
  i1672._heightRange = i1673[1]
  request.r(i1673[2], i1673[3], 0, i1672, '_pipePrefab')
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1675 = data
  request.r(i1675[0], i1675[1], 0, i1674, 'animatorController')
  request.r(i1675[2], i1675[3], 0, i1674, 'avatar')
  i1674.updateMode = i1675[4]
  i1674.hasTransformHierarchy = !!i1675[5]
  i1674.applyRootMotion = !!i1675[6]
  var i1677 = i1675[7]
  var i1676 = []
  for(var i = 0; i < i1677.length; i += 2) {
  request.r(i1677[i + 0], i1677[i + 1], 2, i1676, '')
  }
  i1674.humanBones = i1676
  i1674.enabled = !!i1675[8]
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1681 = data
  i1680.bodyType = i1681[0]
  request.r(i1681[1], i1681[2], 0, i1680, 'material')
  i1680.simulated = !!i1681[3]
  i1680.useAutoMass = !!i1681[4]
  i1680.mass = i1681[5]
  i1680.drag = i1681[6]
  i1680.angularDrag = i1681[7]
  i1680.gravityScale = i1681[8]
  i1680.collisionDetectionMode = i1681[9]
  i1680.sleepMode = i1681[10]
  i1680.constraints = i1681[11]
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D' )
  var i1683 = data
  i1682.size = new pc.Vec2( i1683[0], i1683[1] )
  i1682.direction = i1683[2]
  i1682.enabled = !!i1683[3]
  i1682.isTrigger = !!i1683[4]
  i1682.usedByEffector = !!i1683[5]
  i1682.density = i1683[6]
  i1682.offset = new pc.Vec2( i1683[7], i1683[8] )
  request.r(i1683[9], i1683[10], 0, i1682, 'material')
  return i1682
}

Deserializers["FlyBehavior"] = function (request, data, root) {
  var i1684 = root || request.c( 'FlyBehavior' )
  var i1685 = data
  i1684._velocity = i1685[0]
  i1684._rotationSpeed = i1685[1]
  i1684._idleFloatAmplitude = i1685[2]
  i1684._idleFloatFrequency = i1685[3]
  return i1684
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1686 = root || request.c( 'GameManager' )
  var i1687 = data
  request.r(i1687[0], i1687[1], 0, i1686, '_gameOverCanvas')
  request.r(i1687[2], i1687[3], 0, i1686, '_ingameCanvas')
  request.r(i1687[4], i1687[5], 0, i1686, '_homeCanvas')
  var i1689 = i1687[6]
  var i1688 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Text')))
  for(var i = 0; i < i1689.length; i += 2) {
  request.r(i1689[i + 0], i1689[i + 1], 1, i1688, '')
  }
  i1686._scoreText = i1688
  request.r(i1687[7], i1687[8], 0, i1686, '_audioSource')
  request.r(i1687[9], i1687[10], 0, i1686, '_hitClip')
  request.r(i1687[11], i1687[12], 0, i1686, '_scoreClip')
  request.r(i1687[13], i1687[14], 0, i1686, '_flyClip')
  request.r(i1687[15], i1687[16], 0, i1686, '_dieClip')
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1693 = data
  i1692.pivot = new pc.Vec2( i1693[0], i1693[1] )
  i1692.anchorMin = new pc.Vec2( i1693[2], i1693[3] )
  i1692.anchorMax = new pc.Vec2( i1693[4], i1693[5] )
  i1692.sizeDelta = new pc.Vec2( i1693[6], i1693[7] )
  i1692.anchoredPosition3D = new pc.Vec3( i1693[8], i1693[9], i1693[10] )
  i1692.rotation = new pc.Quat(i1693[11], i1693[12], i1693[13], i1693[14])
  i1692.scale = new pc.Vec3( i1693[15], i1693[16], i1693[17] )
  return i1692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1695 = data
  i1694.planeDistance = i1695[0]
  i1694.referencePixelsPerUnit = i1695[1]
  i1694.isFallbackOverlay = !!i1695[2]
  i1694.renderMode = i1695[3]
  i1694.renderOrder = i1695[4]
  i1694.sortingLayerName = i1695[5]
  i1694.sortingOrder = i1695[6]
  i1694.scaleFactor = i1695[7]
  request.r(i1695[8], i1695[9], 0, i1694, 'worldCamera')
  i1694.overrideSorting = !!i1695[10]
  i1694.pixelPerfect = !!i1695[11]
  i1694.targetDisplay = i1695[12]
  i1694.overridePixelPerfect = !!i1695[13]
  i1694.enabled = !!i1695[14]
  return i1694
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1696 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1697 = data
  i1696.m_UiScaleMode = i1697[0]
  i1696.m_ReferencePixelsPerUnit = i1697[1]
  i1696.m_ScaleFactor = i1697[2]
  i1696.m_ReferenceResolution = new pc.Vec2( i1697[3], i1697[4] )
  i1696.m_ScreenMatchMode = i1697[5]
  i1696.m_MatchWidthOrHeight = i1697[6]
  i1696.m_PhysicalUnit = i1697[7]
  i1696.m_FallbackScreenDPI = i1697[8]
  i1696.m_DefaultSpriteDPI = i1697[9]
  i1696.m_DynamicPixelsPerUnit = i1697[10]
  i1696.m_PresetInfoIsWorld = !!i1697[11]
  return i1696
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1698 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1699 = data
  i1698.m_IgnoreReversedGraphics = !!i1699[0]
  i1698.m_BlockingObjects = i1699[1]
  i1698.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1699[2] )
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1701 = data
  i1700.cullTransparentMesh = !!i1701[0]
  return i1700
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1702 = root || request.c( 'UnityEngine.UI.Text' )
  var i1703 = data
  i1702.m_FontData = request.d('UnityEngine.UI.FontData', i1703[0], i1702.m_FontData)
  i1702.m_Text = i1703[1]
  request.r(i1703[2], i1703[3], 0, i1702, 'm_Material')
  i1702.m_Maskable = !!i1703[4]
  i1702.m_Color = new pc.Color(i1703[5], i1703[6], i1703[7], i1703[8])
  i1702.m_RaycastTarget = !!i1703[9]
  i1702.m_RaycastPadding = new pc.Vec4( i1703[10], i1703[11], i1703[12], i1703[13] )
  return i1702
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1704 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1705 = data
  request.r(i1705[0], i1705[1], 0, i1704, 'm_Font')
  i1704.m_FontSize = i1705[2]
  i1704.m_FontStyle = i1705[3]
  i1704.m_BestFit = !!i1705[4]
  i1704.m_MinSize = i1705[5]
  i1704.m_MaxSize = i1705[6]
  i1704.m_Alignment = i1705[7]
  i1704.m_AlignByGeometry = !!i1705[8]
  i1704.m_RichText = !!i1705[9]
  i1704.m_HorizontalOverflow = i1705[10]
  i1704.m_VerticalOverflow = i1705[11]
  i1704.m_LineSpacing = i1705[12]
  return i1704
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i1706 = root || request.c( 'UnityEngine.UI.Outline' )
  var i1707 = data
  i1706.m_EffectColor = new pc.Color(i1707[0], i1707[1], i1707[2], i1707[3])
  i1706.m_EffectDistance = new pc.Vec2( i1707[4], i1707[5] )
  i1706.m_UseGraphicAlpha = !!i1707[6]
  return i1706
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1708 = root || request.c( 'UnityEngine.UI.Image' )
  var i1709 = data
  request.r(i1709[0], i1709[1], 0, i1708, 'm_Sprite')
  i1708.m_Type = i1709[2]
  i1708.m_PreserveAspect = !!i1709[3]
  i1708.m_FillCenter = !!i1709[4]
  i1708.m_FillMethod = i1709[5]
  i1708.m_FillAmount = i1709[6]
  i1708.m_FillClockwise = !!i1709[7]
  i1708.m_FillOrigin = i1709[8]
  i1708.m_UseSpriteMesh = !!i1709[9]
  i1708.m_PixelsPerUnitMultiplier = i1709[10]
  request.r(i1709[11], i1709[12], 0, i1708, 'm_Material')
  i1708.m_Maskable = !!i1709[13]
  i1708.m_Color = new pc.Color(i1709[14], i1709[15], i1709[16], i1709[17])
  i1708.m_RaycastTarget = !!i1709[18]
  i1708.m_RaycastPadding = new pc.Vec4( i1709[19], i1709[20], i1709[21], i1709[22] )
  return i1708
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1710 = root || request.c( 'UnityEngine.UI.Button' )
  var i1711 = data
  i1710.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1711[0], i1710.m_OnClick)
  i1710.m_Navigation = request.d('UnityEngine.UI.Navigation', i1711[1], i1710.m_Navigation)
  i1710.m_Transition = i1711[2]
  i1710.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1711[3], i1710.m_Colors)
  i1710.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1711[4], i1710.m_SpriteState)
  i1710.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1711[5], i1710.m_AnimationTriggers)
  i1710.m_Interactable = !!i1711[6]
  request.r(i1711[7], i1711[8], 0, i1710, 'm_TargetGraphic')
  return i1710
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1712 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1713 = data
  i1712.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1713[0], i1712.m_PersistentCalls)
  return i1712
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1714 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1715 = data
  var i1717 = i1715[0]
  var i1716 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1717.length; i += 1) {
    i1716.add(request.d('UnityEngine.Events.PersistentCall', i1717[i + 0]));
  }
  i1714.m_Calls = i1716
  return i1714
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1720 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1721 = data
  request.r(i1721[0], i1721[1], 0, i1720, 'm_Target')
  i1720.m_TargetAssemblyTypeName = i1721[2]
  i1720.m_MethodName = i1721[3]
  i1720.m_Mode = i1721[4]
  i1720.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1721[5], i1720.m_Arguments)
  i1720.m_CallState = i1721[6]
  return i1720
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1722 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1723 = data
  request.r(i1723[0], i1723[1], 0, i1722, 'm_ObjectArgument')
  i1722.m_ObjectArgumentAssemblyTypeName = i1723[2]
  i1722.m_IntArgument = i1723[3]
  i1722.m_FloatArgument = i1723[4]
  i1722.m_StringArgument = i1723[5]
  i1722.m_BoolArgument = !!i1723[6]
  return i1722
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1724 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1725 = data
  i1724.m_Mode = i1725[0]
  i1724.m_WrapAround = !!i1725[1]
  request.r(i1725[2], i1725[3], 0, i1724, 'm_SelectOnUp')
  request.r(i1725[4], i1725[5], 0, i1724, 'm_SelectOnDown')
  request.r(i1725[6], i1725[7], 0, i1724, 'm_SelectOnLeft')
  request.r(i1725[8], i1725[9], 0, i1724, 'm_SelectOnRight')
  return i1724
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1726 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1727 = data
  i1726.m_NormalColor = new pc.Color(i1727[0], i1727[1], i1727[2], i1727[3])
  i1726.m_HighlightedColor = new pc.Color(i1727[4], i1727[5], i1727[6], i1727[7])
  i1726.m_PressedColor = new pc.Color(i1727[8], i1727[9], i1727[10], i1727[11])
  i1726.m_SelectedColor = new pc.Color(i1727[12], i1727[13], i1727[14], i1727[15])
  i1726.m_DisabledColor = new pc.Color(i1727[16], i1727[17], i1727[18], i1727[19])
  i1726.m_ColorMultiplier = i1727[20]
  i1726.m_FadeDuration = i1727[21]
  return i1726
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1728 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1729 = data
  request.r(i1729[0], i1729[1], 0, i1728, 'm_HighlightedSprite')
  request.r(i1729[2], i1729[3], 0, i1728, 'm_PressedSprite')
  request.r(i1729[4], i1729[5], 0, i1728, 'm_SelectedSprite')
  request.r(i1729[6], i1729[7], 0, i1728, 'm_DisabledSprite')
  return i1728
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1730 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1731 = data
  i1730.m_NormalTrigger = i1731[0]
  i1730.m_HighlightedTrigger = i1731[1]
  i1730.m_PressedTrigger = i1731[2]
  i1730.m_SelectedTrigger = i1731[3]
  i1730.m_DisabledTrigger = i1731[4]
  return i1730
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1732 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1733 = data
  request.r(i1733[0], i1733[1], 0, i1732, 'm_FirstSelected')
  i1732.m_sendNavigationEvents = !!i1733[2]
  i1732.m_DragThreshold = i1733[3]
  return i1732
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1734 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1735 = data
  i1734.m_HorizontalAxis = i1735[0]
  i1734.m_VerticalAxis = i1735[1]
  i1734.m_SubmitButton = i1735[2]
  i1734.m_CancelButton = i1735[3]
  i1734.m_InputActionsPerSecond = i1735[4]
  i1734.m_RepeatDelay = i1735[5]
  i1734.m_ForceModuleActive = !!i1735[6]
  i1734.m_SendPointerHoverToParent = !!i1735[7]
  return i1734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1737 = data
  i1736.ambientIntensity = i1737[0]
  i1736.reflectionIntensity = i1737[1]
  i1736.ambientMode = i1737[2]
  i1736.ambientLight = new pc.Color(i1737[3], i1737[4], i1737[5], i1737[6])
  i1736.ambientSkyColor = new pc.Color(i1737[7], i1737[8], i1737[9], i1737[10])
  i1736.ambientGroundColor = new pc.Color(i1737[11], i1737[12], i1737[13], i1737[14])
  i1736.ambientEquatorColor = new pc.Color(i1737[15], i1737[16], i1737[17], i1737[18])
  i1736.fogColor = new pc.Color(i1737[19], i1737[20], i1737[21], i1737[22])
  i1736.fogEndDistance = i1737[23]
  i1736.fogStartDistance = i1737[24]
  i1736.fogDensity = i1737[25]
  i1736.fog = !!i1737[26]
  request.r(i1737[27], i1737[28], 0, i1736, 'skybox')
  i1736.fogMode = i1737[29]
  var i1739 = i1737[30]
  var i1738 = []
  for(var i = 0; i < i1739.length; i += 1) {
    i1738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1739[i + 0]) );
  }
  i1736.lightmaps = i1738
  i1736.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1737[31], i1736.lightProbes)
  i1736.lightmapsMode = i1737[32]
  i1736.mixedBakeMode = i1737[33]
  i1736.environmentLightingMode = i1737[34]
  i1736.ambientProbe = new pc.SphericalHarmonicsL2(i1737[35])
  i1736.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1737[36])
  i1736.useReferenceAmbientProbe = !!i1737[37]
  request.r(i1737[38], i1737[39], 0, i1736, 'customReflection')
  request.r(i1737[40], i1737[41], 0, i1736, 'defaultReflection')
  i1736.defaultReflectionMode = i1737[42]
  i1736.defaultReflectionResolution = i1737[43]
  i1736.sunLightObjectId = i1737[44]
  i1736.pixelLightCount = i1737[45]
  i1736.defaultReflectionHDR = !!i1737[46]
  i1736.hasLightDataAsset = !!i1737[47]
  i1736.hasManualGenerate = !!i1737[48]
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1743 = data
  request.r(i1743[0], i1743[1], 0, i1742, 'lightmapColor')
  request.r(i1743[2], i1743[3], 0, i1742, 'lightmapDirection')
  request.r(i1743[4], i1743[5], 0, i1742, 'shadowMask')
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1744 = root || new UnityEngine.LightProbes()
  var i1745 = data
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i1750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i1751 = data
  i1750.AdditionalLightsRenderingMode = i1751[0]
  i1750.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1751[1], i1750.LightRenderingMode)
  i1750.MainLightRenderingModeValue = i1751[2]
  i1750.SupportsMainLightShadows = !!i1751[3]
  i1750.MainLightShadowmapResolutionValue = i1751[4]
  i1750.SupportsSoftShadows = !!i1751[5]
  i1750.SoftShadowQualityValue = i1751[6]
  i1750.ShadowDistance = i1751[7]
  i1750.ShadowCascadeCount = i1751[8]
  i1750.Cascade2Split = i1751[9]
  i1750.Cascade3Split = new pc.Vec2( i1751[10], i1751[11] )
  i1750.Cascade4Split = new pc.Vec3( i1751[12], i1751[13], i1751[14] )
  i1750.CascadeBorder = i1751[15]
  i1750.ShadowDepthBias = i1751[16]
  i1750.ShadowNormalBias = i1751[17]
  i1750.RequireDepthTexture = !!i1751[18]
  i1750.RequireOpaqueTexture = !!i1751[19]
  i1750.scriptableRendererData = request.d('Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData', i1751[20], i1750.scriptableRendererData)
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i1752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i1753 = data
  i1752.Disabled = i1753[0]
  i1752.PerVertex = i1753[1]
  i1752.PerPixel = i1753[2]
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData"] = function (request, data, root) {
  var i1754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData' )
  var i1755 = data
  i1754.opaqueLayerMask = i1755[0]
  i1754.transparentLayerMask = i1755[1]
  var i1757 = i1755[2]
  var i1756 = []
  for(var i = 0; i < i1757.length; i += 1) {
    i1756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects', i1757[i + 0]) );
  }
  i1754.RenderObjectsFeatures = i1756
  i1754.name = i1755[3]
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects"] = function (request, data, root) {
  var i1760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects' )
  var i1761 = data
  i1760.settings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings', i1761[0], i1760.settings)
  i1760.name = i1761[1]
  i1760.typeName = i1761[2]
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1763 = data
  var i1765 = i1763[0]
  var i1764 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1765[i + 0]));
  }
  i1762.ShaderCompilationErrors = i1764
  i1762.name = i1763[1]
  i1762.guid = i1763[2]
  var i1767 = i1763[3]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.push( i1767[i + 0] );
  }
  i1762.shaderDefinedKeywords = i1766
  var i1769 = i1763[4]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1769[i + 0]) );
  }
  i1762.passes = i1768
  var i1771 = i1763[5]
  var i1770 = []
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1771[i + 0]) );
  }
  i1762.usePasses = i1770
  var i1773 = i1763[6]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1773[i + 0]) );
  }
  i1762.defaultParameterValues = i1772
  request.r(i1763[7], i1763[8], 0, i1762, 'unityFallbackShader')
  i1762.readDepth = !!i1763[9]
  i1762.hasDepthOnlyPass = !!i1763[10]
  i1762.isCreatedByShaderGraph = !!i1763[11]
  i1762.disableBatching = !!i1763[12]
  i1762.compiled = !!i1763[13]
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1777 = data
  i1776.shaderName = i1777[0]
  i1776.errorMessage = i1777[1]
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1782 = root || new pc.UnityShaderPass()
  var i1783 = data
  i1782.id = i1783[0]
  i1782.subShaderIndex = i1783[1]
  i1782.name = i1783[2]
  i1782.passType = i1783[3]
  i1782.grabPassTextureName = i1783[4]
  i1782.usePass = !!i1783[5]
  i1782.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[6], i1782.zTest)
  i1782.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[7], i1782.zWrite)
  i1782.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[8], i1782.culling)
  i1782.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1783[9], i1782.blending)
  i1782.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1783[10], i1782.alphaBlending)
  i1782.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[11], i1782.colorWriteMask)
  i1782.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[12], i1782.offsetUnits)
  i1782.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[13], i1782.offsetFactor)
  i1782.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[14], i1782.stencilRef)
  i1782.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[15], i1782.stencilReadMask)
  i1782.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[16], i1782.stencilWriteMask)
  i1782.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1783[17], i1782.stencilOp)
  i1782.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1783[18], i1782.stencilOpFront)
  i1782.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1783[19], i1782.stencilOpBack)
  var i1785 = i1783[20]
  var i1784 = []
  for(var i = 0; i < i1785.length; i += 1) {
    i1784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1785[i + 0]) );
  }
  i1782.tags = i1784
  var i1787 = i1783[21]
  var i1786 = []
  for(var i = 0; i < i1787.length; i += 1) {
    i1786.push( i1787[i + 0] );
  }
  i1782.passDefinedKeywords = i1786
  var i1789 = i1783[22]
  var i1788 = []
  for(var i = 0; i < i1789.length; i += 1) {
    i1788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1789[i + 0]) );
  }
  i1782.passDefinedKeywordGroups = i1788
  var i1791 = i1783[23]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1791[i + 0]) );
  }
  i1782.variants = i1790
  var i1793 = i1783[24]
  var i1792 = []
  for(var i = 0; i < i1793.length; i += 1) {
    i1792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1793[i + 0]) );
  }
  i1782.excludedVariants = i1792
  i1782.hasDepthReader = !!i1783[25]
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1795 = data
  i1794.val = i1795[0]
  i1794.name = i1795[1]
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1797 = data
  i1796.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1797[0], i1796.src)
  i1796.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1797[1], i1796.dst)
  i1796.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1797[2], i1796.op)
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1799 = data
  i1798.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1799[0], i1798.pass)
  i1798.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1799[1], i1798.fail)
  i1798.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1799[2], i1798.zFail)
  i1798.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1799[3], i1798.comp)
  return i1798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1803 = data
  i1802.name = i1803[0]
  i1802.value = i1803[1]
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1807 = data
  var i1809 = i1807[0]
  var i1808 = []
  for(var i = 0; i < i1809.length; i += 1) {
    i1808.push( i1809[i + 0] );
  }
  i1806.keywords = i1808
  i1806.hasDiscard = !!i1807[1]
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1813 = data
  i1812.passId = i1813[0]
  i1812.subShaderIndex = i1813[1]
  var i1815 = i1813[2]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 1) {
    i1814.push( i1815[i + 0] );
  }
  i1812.keywords = i1814
  i1812.vertexProgram = i1813[3]
  i1812.fragmentProgram = i1813[4]
  i1812.exportedForWebGl2 = !!i1813[5]
  i1812.readDepth = !!i1813[6]
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1819 = data
  request.r(i1819[0], i1819[1], 0, i1818, 'shader')
  i1818.pass = i1819[2]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1823 = data
  i1822.name = i1823[0]
  i1822.type = i1823[1]
  i1822.value = new pc.Vec4( i1823[2], i1823[3], i1823[4], i1823[5] )
  i1822.textureValue = i1823[6]
  i1822.shaderPropertyFlag = i1823[7]
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1825 = data
  i1824.name = i1825[0]
  request.r(i1825[1], i1825[2], 0, i1824, 'texture')
  i1824.aabb = i1825[3]
  i1824.vertices = i1825[4]
  i1824.triangles = i1825[5]
  i1824.textureRect = UnityEngine.Rect.MinMaxRect(i1825[6], i1825[7], i1825[8], i1825[9])
  i1824.packedRect = UnityEngine.Rect.MinMaxRect(i1825[10], i1825[11], i1825[12], i1825[13])
  i1824.border = new pc.Vec4( i1825[14], i1825[15], i1825[16], i1825[17] )
  i1824.transparency = i1825[18]
  i1824.bounds = i1825[19]
  i1824.pixelsPerUnit = i1825[20]
  i1824.textureWidth = i1825[21]
  i1824.textureHeight = i1825[22]
  i1824.nativeSize = new pc.Vec2( i1825[23], i1825[24] )
  i1824.pivot = new pc.Vec2( i1825[25], i1825[26] )
  i1824.textureRectOffset = new pc.Vec2( i1825[27], i1825[28] )
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1827 = data
  i1826.name = i1827[0]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1829 = data
  i1828.name = i1829[0]
  i1828.wrapMode = i1829[1]
  i1828.isLooping = !!i1829[2]
  i1828.length = i1829[3]
  var i1831 = i1829[4]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1831[i + 0]) );
  }
  i1828.curves = i1830
  var i1833 = i1829[5]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1833[i + 0]) );
  }
  i1828.events = i1832
  i1828.halfPrecision = !!i1829[6]
  i1828._frameRate = i1829[7]
  i1828.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1829[8], i1828.localBounds)
  i1828.hasMuscleCurves = !!i1829[9]
  var i1835 = i1829[10]
  var i1834 = []
  for(var i = 0; i < i1835.length; i += 1) {
    i1834.push( i1835[i + 0] );
  }
  i1828.clipMuscleConstant = i1834
  i1828.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1829[11], i1828.clipBindingConstant)
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1839 = data
  i1838.path = i1839[0]
  i1838.hash = i1839[1]
  i1838.componentType = i1839[2]
  i1838.property = i1839[3]
  i1838.keys = i1839[4]
  var i1841 = i1839[5]
  var i1840 = []
  for(var i = 0; i < i1841.length; i += 1) {
    i1840.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1841[i + 0]) );
  }
  i1838.objectReferenceKeys = i1840
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1845 = data
  i1844.time = i1845[0]
  request.r(i1845[1], i1845[2], 0, i1844, 'value')
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1849 = data
  i1848.functionName = i1849[0]
  i1848.floatParameter = i1849[1]
  i1848.intParameter = i1849[2]
  i1848.stringParameter = i1849[3]
  request.r(i1849[4], i1849[5], 0, i1848, 'objectReferenceParameter')
  i1848.time = i1849[6]
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1851 = data
  i1850.center = new pc.Vec3( i1851[0], i1851[1], i1851[2] )
  i1850.extends = new pc.Vec3( i1851[3], i1851[4], i1851[5] )
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1855 = data
  var i1857 = i1855[0]
  var i1856 = []
  for(var i = 0; i < i1857.length; i += 1) {
    i1856.push( i1857[i + 0] );
  }
  i1854.genericBindings = i1856
  var i1859 = i1855[1]
  var i1858 = []
  for(var i = 0; i < i1859.length; i += 1) {
    i1858.push( i1859[i + 0] );
  }
  i1854.pptrCurveMapping = i1858
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1861 = data
  i1860.name = i1861[0]
  i1860.ascent = i1861[1]
  i1860.originalLineHeight = i1861[2]
  i1860.fontSize = i1861[3]
  var i1863 = i1861[4]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 1) {
    i1862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1863[i + 0]) );
  }
  i1860.characterInfo = i1862
  request.r(i1861[5], i1861[6], 0, i1860, 'texture')
  i1860.originalFontSize = i1861[7]
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1867 = data
  i1866.index = i1867[0]
  i1866.advance = i1867[1]
  i1866.bearing = i1867[2]
  i1866.glyphWidth = i1867[3]
  i1866.glyphHeight = i1867[4]
  i1866.minX = i1867[5]
  i1866.maxX = i1867[6]
  i1866.minY = i1867[7]
  i1866.maxY = i1867[8]
  i1866.uvBottomLeftX = i1867[9]
  i1866.uvBottomLeftY = i1867[10]
  i1866.uvBottomRightX = i1867[11]
  i1866.uvBottomRightY = i1867[12]
  i1866.uvTopLeftX = i1867[13]
  i1866.uvTopLeftY = i1867[14]
  i1866.uvTopRightX = i1867[15]
  i1866.uvTopRightY = i1867[16]
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1869 = data
  i1868.name = i1869[0]
  var i1871 = i1869[1]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1871[i + 0]) );
  }
  i1868.layers = i1870
  var i1873 = i1869[2]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 1) {
    i1872.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1873[i + 0]) );
  }
  i1868.parameters = i1872
  i1868.animationClips = i1869[3]
  i1868.avatarUnsupported = i1869[4]
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1877 = data
  i1876.name = i1877[0]
  i1876.defaultWeight = i1877[1]
  i1876.blendingMode = i1877[2]
  i1876.avatarMask = i1877[3]
  i1876.syncedLayerIndex = i1877[4]
  i1876.syncedLayerAffectsTiming = !!i1877[5]
  i1876.syncedLayers = i1877[6]
  i1876.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1877[7], i1876.stateMachine)
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1879 = data
  i1878.id = i1879[0]
  i1878.name = i1879[1]
  i1878.path = i1879[2]
  var i1881 = i1879[3]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 1) {
    i1880.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1881[i + 0]) );
  }
  i1878.states = i1880
  var i1883 = i1879[4]
  var i1882 = []
  for(var i = 0; i < i1883.length; i += 1) {
    i1882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1883[i + 0]) );
  }
  i1878.machines = i1882
  var i1885 = i1879[5]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1885[i + 0]) );
  }
  i1878.entryStateTransitions = i1884
  var i1887 = i1879[6]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1887[i + 0]) );
  }
  i1878.exitStateTransitions = i1886
  var i1889 = i1879[7]
  var i1888 = []
  for(var i = 0; i < i1889.length; i += 1) {
    i1888.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1889[i + 0]) );
  }
  i1878.anyStateTransitions = i1888
  i1878.defaultStateId = i1879[8]
  return i1878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1893 = data
  i1892.id = i1893[0]
  i1892.name = i1893[1]
  i1892.cycleOffset = i1893[2]
  i1892.cycleOffsetParameter = i1893[3]
  i1892.cycleOffsetParameterActive = !!i1893[4]
  i1892.mirror = !!i1893[5]
  i1892.mirrorParameter = i1893[6]
  i1892.mirrorParameterActive = !!i1893[7]
  i1892.motionId = i1893[8]
  i1892.nameHash = i1893[9]
  i1892.fullPathHash = i1893[10]
  i1892.speed = i1893[11]
  i1892.speedParameter = i1893[12]
  i1892.speedParameterActive = !!i1893[13]
  i1892.tag = i1893[14]
  i1892.tagHash = i1893[15]
  i1892.writeDefaultValues = !!i1893[16]
  var i1895 = i1893[17]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 2) {
  request.r(i1895[i + 0], i1895[i + 1], 2, i1894, '')
  }
  i1892.behaviours = i1894
  var i1897 = i1893[18]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1897[i + 0]) );
  }
  i1892.transitions = i1896
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1903 = data
  i1902.fullPath = i1903[0]
  i1902.canTransitionToSelf = !!i1903[1]
  i1902.duration = i1903[2]
  i1902.exitTime = i1903[3]
  i1902.hasExitTime = !!i1903[4]
  i1902.hasFixedDuration = !!i1903[5]
  i1902.interruptionSource = i1903[6]
  i1902.offset = i1903[7]
  i1902.orderedInterruption = !!i1903[8]
  i1902.destinationStateId = i1903[9]
  i1902.isExit = !!i1903[10]
  i1902.mute = !!i1903[11]
  i1902.solo = !!i1903[12]
  var i1905 = i1903[13]
  var i1904 = []
  for(var i = 0; i < i1905.length; i += 1) {
    i1904.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1905[i + 0]) );
  }
  i1902.conditions = i1904
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1911 = data
  i1910.destinationStateId = i1911[0]
  i1910.isExit = !!i1911[1]
  i1910.mute = !!i1911[2]
  i1910.solo = !!i1911[3]
  var i1913 = i1911[4]
  var i1912 = []
  for(var i = 0; i < i1913.length; i += 1) {
    i1912.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1913[i + 0]) );
  }
  i1910.conditions = i1912
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1917 = data
  i1916.defaultBool = !!i1917[0]
  i1916.defaultFloat = i1917[1]
  i1916.defaultInt = i1917[2]
  i1916.name = i1917[3]
  i1916.nameHash = i1917[4]
  i1916.type = i1917[5]
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1919 = data
  i1918.name = i1919[0]
  i1918.bytes64 = i1919[1]
  i1918.data = i1919[2]
  return i1918
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1920 = root || request.c( 'TMPro.TMP_Settings' )
  var i1921 = data
  i1920.m_enableWordWrapping = !!i1921[0]
  i1920.m_enableKerning = !!i1921[1]
  i1920.m_enableExtraPadding = !!i1921[2]
  i1920.m_enableTintAllSprites = !!i1921[3]
  i1920.m_enableParseEscapeCharacters = !!i1921[4]
  i1920.m_EnableRaycastTarget = !!i1921[5]
  i1920.m_GetFontFeaturesAtRuntime = !!i1921[6]
  i1920.m_missingGlyphCharacter = i1921[7]
  i1920.m_warningsDisabled = !!i1921[8]
  request.r(i1921[9], i1921[10], 0, i1920, 'm_defaultFontAsset')
  i1920.m_defaultFontAssetPath = i1921[11]
  i1920.m_defaultFontSize = i1921[12]
  i1920.m_defaultAutoSizeMinRatio = i1921[13]
  i1920.m_defaultAutoSizeMaxRatio = i1921[14]
  i1920.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1921[15], i1921[16] )
  i1920.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1921[17], i1921[18] )
  i1920.m_autoSizeTextContainer = !!i1921[19]
  i1920.m_IsTextObjectScaleStatic = !!i1921[20]
  var i1923 = i1921[21]
  var i1922 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1923.length; i += 2) {
  request.r(i1923[i + 0], i1923[i + 1], 1, i1922, '')
  }
  i1920.m_fallbackFontAssets = i1922
  i1920.m_matchMaterialPreset = !!i1921[22]
  request.r(i1921[23], i1921[24], 0, i1920, 'm_defaultSpriteAsset')
  i1920.m_defaultSpriteAssetPath = i1921[25]
  i1920.m_enableEmojiSupport = !!i1921[26]
  i1920.m_MissingCharacterSpriteUnicode = i1921[27]
  i1920.m_defaultColorGradientPresetsPath = i1921[28]
  request.r(i1921[29], i1921[30], 0, i1920, 'm_defaultStyleSheet')
  i1920.m_StyleSheetsResourcePath = i1921[31]
  request.r(i1921[32], i1921[33], 0, i1920, 'm_leadingCharacters')
  request.r(i1921[34], i1921[35], 0, i1920, 'm_followingCharacters')
  i1920.m_UseModernHangulLineBreakingRules = !!i1921[36]
  return i1920
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1926 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1927 = data
  request.r(i1927[0], i1927[1], 0, i1926, 'atlas')
  i1926.normalStyle = i1927[2]
  i1926.normalSpacingOffset = i1927[3]
  i1926.boldStyle = i1927[4]
  i1926.boldSpacing = i1927[5]
  i1926.italicStyle = i1927[6]
  i1926.tabSize = i1927[7]
  i1926.hashCode = i1927[8]
  request.r(i1927[9], i1927[10], 0, i1926, 'material')
  i1926.materialHashCode = i1927[11]
  i1926.m_Version = i1927[12]
  i1926.m_SourceFontFileGUID = i1927[13]
  request.r(i1927[14], i1927[15], 0, i1926, 'm_SourceFontFile_EditorRef')
  request.r(i1927[16], i1927[17], 0, i1926, 'm_SourceFontFile')
  i1926.m_AtlasPopulationMode = i1927[18]
  i1926.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1927[19], i1926.m_FaceInfo)
  var i1929 = i1927[20]
  var i1928 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1929.length; i += 1) {
    i1928.add(request.d('UnityEngine.TextCore.Glyph', i1929[i + 0]));
  }
  i1926.m_GlyphTable = i1928
  var i1931 = i1927[21]
  var i1930 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1931.length; i += 1) {
    i1930.add(request.d('TMPro.TMP_Character', i1931[i + 0]));
  }
  i1926.m_CharacterTable = i1930
  var i1933 = i1927[22]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 2) {
  request.r(i1933[i + 0], i1933[i + 1], 2, i1932, '')
  }
  i1926.m_AtlasTextures = i1932
  i1926.m_AtlasTextureIndex = i1927[23]
  i1926.m_IsMultiAtlasTexturesEnabled = !!i1927[24]
  i1926.m_ClearDynamicDataOnBuild = !!i1927[25]
  var i1935 = i1927[26]
  var i1934 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1935.length; i += 1) {
    i1934.add(request.d('UnityEngine.TextCore.GlyphRect', i1935[i + 0]));
  }
  i1926.m_UsedGlyphRects = i1934
  var i1937 = i1927[27]
  var i1936 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1937.length; i += 1) {
    i1936.add(request.d('UnityEngine.TextCore.GlyphRect', i1937[i + 0]));
  }
  i1926.m_FreeGlyphRects = i1936
  i1926.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1927[28], i1926.m_fontInfo)
  i1926.m_AtlasWidth = i1927[29]
  i1926.m_AtlasHeight = i1927[30]
  i1926.m_AtlasPadding = i1927[31]
  i1926.m_AtlasRenderMode = i1927[32]
  var i1939 = i1927[33]
  var i1938 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1939.length; i += 1) {
    i1938.add(request.d('TMPro.TMP_Glyph', i1939[i + 0]));
  }
  i1926.m_glyphInfoList = i1938
  i1926.m_KerningTable = request.d('TMPro.KerningTable', i1927[34], i1926.m_KerningTable)
  i1926.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1927[35], i1926.m_FontFeatureTable)
  var i1941 = i1927[36]
  var i1940 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1941.length; i += 2) {
  request.r(i1941[i + 0], i1941[i + 1], 1, i1940, '')
  }
  i1926.fallbackFontAssets = i1940
  var i1943 = i1927[37]
  var i1942 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1943.length; i += 2) {
  request.r(i1943[i + 0], i1943[i + 1], 1, i1942, '')
  }
  i1926.m_FallbackFontAssetTable = i1942
  i1926.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1927[38], i1926.m_CreationSettings)
  var i1945 = i1927[39]
  var i1944 = []
  for(var i = 0; i < i1945.length; i += 1) {
    i1944.push( request.d('TMPro.TMP_FontWeightPair', i1945[i + 0]) );
  }
  i1926.m_FontWeightTable = i1944
  var i1947 = i1927[40]
  var i1946 = []
  for(var i = 0; i < i1947.length; i += 1) {
    i1946.push( request.d('TMPro.TMP_FontWeightPair', i1947[i + 0]) );
  }
  i1926.fontWeights = i1946
  return i1926
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1948 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1949 = data
  i1948.m_FaceIndex = i1949[0]
  i1948.m_FamilyName = i1949[1]
  i1948.m_StyleName = i1949[2]
  i1948.m_PointSize = i1949[3]
  i1948.m_Scale = i1949[4]
  i1948.m_UnitsPerEM = i1949[5]
  i1948.m_LineHeight = i1949[6]
  i1948.m_AscentLine = i1949[7]
  i1948.m_CapLine = i1949[8]
  i1948.m_MeanLine = i1949[9]
  i1948.m_Baseline = i1949[10]
  i1948.m_DescentLine = i1949[11]
  i1948.m_SuperscriptOffset = i1949[12]
  i1948.m_SuperscriptSize = i1949[13]
  i1948.m_SubscriptOffset = i1949[14]
  i1948.m_SubscriptSize = i1949[15]
  i1948.m_UnderlineOffset = i1949[16]
  i1948.m_UnderlineThickness = i1949[17]
  i1948.m_StrikethroughOffset = i1949[18]
  i1948.m_StrikethroughThickness = i1949[19]
  i1948.m_TabWidth = i1949[20]
  return i1948
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1952 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1953 = data
  i1952.m_Index = i1953[0]
  i1952.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1953[1], i1952.m_Metrics)
  i1952.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1953[2], i1952.m_GlyphRect)
  i1952.m_Scale = i1953[3]
  i1952.m_AtlasIndex = i1953[4]
  i1952.m_ClassDefinitionType = i1953[5]
  return i1952
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1954 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1955 = data
  i1954.m_Width = i1955[0]
  i1954.m_Height = i1955[1]
  i1954.m_HorizontalBearingX = i1955[2]
  i1954.m_HorizontalBearingY = i1955[3]
  i1954.m_HorizontalAdvance = i1955[4]
  return i1954
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1956 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1957 = data
  i1956.m_X = i1957[0]
  i1956.m_Y = i1957[1]
  i1956.m_Width = i1957[2]
  i1956.m_Height = i1957[3]
  return i1956
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1960 = root || request.c( 'TMPro.TMP_Character' )
  var i1961 = data
  i1960.m_ElementType = i1961[0]
  i1960.m_Unicode = i1961[1]
  i1960.m_GlyphIndex = i1961[2]
  i1960.m_Scale = i1961[3]
  return i1960
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1966 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1967 = data
  i1966.Name = i1967[0]
  i1966.PointSize = i1967[1]
  i1966.Scale = i1967[2]
  i1966.CharacterCount = i1967[3]
  i1966.LineHeight = i1967[4]
  i1966.Baseline = i1967[5]
  i1966.Ascender = i1967[6]
  i1966.CapHeight = i1967[7]
  i1966.Descender = i1967[8]
  i1966.CenterLine = i1967[9]
  i1966.SuperscriptOffset = i1967[10]
  i1966.SubscriptOffset = i1967[11]
  i1966.SubSize = i1967[12]
  i1966.Underline = i1967[13]
  i1966.UnderlineThickness = i1967[14]
  i1966.strikethrough = i1967[15]
  i1966.strikethroughThickness = i1967[16]
  i1966.TabWidth = i1967[17]
  i1966.Padding = i1967[18]
  i1966.AtlasWidth = i1967[19]
  i1966.AtlasHeight = i1967[20]
  return i1966
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1970 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1971 = data
  i1970.id = i1971[0]
  i1970.x = i1971[1]
  i1970.y = i1971[2]
  i1970.width = i1971[3]
  i1970.height = i1971[4]
  i1970.xOffset = i1971[5]
  i1970.yOffset = i1971[6]
  i1970.xAdvance = i1971[7]
  i1970.scale = i1971[8]
  return i1970
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1972 = root || request.c( 'TMPro.KerningTable' )
  var i1973 = data
  var i1975 = i1973[0]
  var i1974 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1975.length; i += 1) {
    i1974.add(request.d('TMPro.KerningPair', i1975[i + 0]));
  }
  i1972.kerningPairs = i1974
  return i1972
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1978 = root || request.c( 'TMPro.KerningPair' )
  var i1979 = data
  i1978.xOffset = i1979[0]
  i1978.m_FirstGlyph = i1979[1]
  i1978.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1979[2], i1978.m_FirstGlyphAdjustments)
  i1978.m_SecondGlyph = i1979[3]
  i1978.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1979[4], i1978.m_SecondGlyphAdjustments)
  i1978.m_IgnoreSpacingAdjustments = !!i1979[5]
  return i1978
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1980 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1981 = data
  var i1983 = i1981[0]
  var i1982 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1983.length; i += 1) {
    i1982.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1983[i + 0]));
  }
  i1980.m_GlyphPairAdjustmentRecords = i1982
  return i1980
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1986 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1987 = data
  i1986.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1987[0], i1986.m_FirstAdjustmentRecord)
  i1986.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1987[1], i1986.m_SecondAdjustmentRecord)
  i1986.m_FeatureLookupFlags = i1987[2]
  return i1986
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1988 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1989 = data
  i1988.m_GlyphIndex = i1989[0]
  i1988.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1989[1], i1988.m_GlyphValueRecord)
  return i1988
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1990 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1991 = data
  i1990.m_XPlacement = i1991[0]
  i1990.m_YPlacement = i1991[1]
  i1990.m_XAdvance = i1991[2]
  i1990.m_YAdvance = i1991[3]
  return i1990
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1992 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1993 = data
  i1992.sourceFontFileName = i1993[0]
  i1992.sourceFontFileGUID = i1993[1]
  i1992.pointSizeSamplingMode = i1993[2]
  i1992.pointSize = i1993[3]
  i1992.padding = i1993[4]
  i1992.packingMode = i1993[5]
  i1992.atlasWidth = i1993[6]
  i1992.atlasHeight = i1993[7]
  i1992.characterSetSelectionMode = i1993[8]
  i1992.characterSequence = i1993[9]
  i1992.referencedFontAssetGUID = i1993[10]
  i1992.referencedTextAssetGUID = i1993[11]
  i1992.fontStyle = i1993[12]
  i1992.fontStyleModifier = i1993[13]
  i1992.renderMode = i1993[14]
  i1992.includeFontFeatures = !!i1993[15]
  return i1992
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1996 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1997 = data
  request.r(i1997[0], i1997[1], 0, i1996, 'regularTypeface')
  request.r(i1997[2], i1997[3], 0, i1996, 'italicTypeface')
  return i1996
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1998 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1999 = data
  request.r(i1999[0], i1999[1], 0, i1998, 'spriteSheet')
  var i2001 = i1999[2]
  var i2000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.add(request.d('TMPro.TMP_Sprite', i2001[i + 0]));
  }
  i1998.spriteInfoList = i2000
  var i2003 = i1999[3]
  var i2002 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2003.length; i += 2) {
  request.r(i2003[i + 0], i2003[i + 1], 1, i2002, '')
  }
  i1998.fallbackSpriteAssets = i2002
  i1998.hashCode = i1999[4]
  request.r(i1999[5], i1999[6], 0, i1998, 'material')
  i1998.materialHashCode = i1999[7]
  i1998.m_Version = i1999[8]
  i1998.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1999[9], i1998.m_FaceInfo)
  var i2005 = i1999[10]
  var i2004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.add(request.d('TMPro.TMP_SpriteCharacter', i2005[i + 0]));
  }
  i1998.m_SpriteCharacterTable = i2004
  var i2007 = i1999[11]
  var i2006 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2007.length; i += 1) {
    i2006.add(request.d('TMPro.TMP_SpriteGlyph', i2007[i + 0]));
  }
  i1998.m_SpriteGlyphTable = i2006
  return i1998
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2010 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2011 = data
  i2010.name = i2011[0]
  i2010.hashCode = i2011[1]
  i2010.unicode = i2011[2]
  i2010.pivot = new pc.Vec2( i2011[3], i2011[4] )
  request.r(i2011[5], i2011[6], 0, i2010, 'sprite')
  i2010.id = i2011[7]
  i2010.x = i2011[8]
  i2010.y = i2011[9]
  i2010.width = i2011[10]
  i2010.height = i2011[11]
  i2010.xOffset = i2011[12]
  i2010.yOffset = i2011[13]
  i2010.xAdvance = i2011[14]
  i2010.scale = i2011[15]
  return i2010
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2016 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2017 = data
  i2016.m_Name = i2017[0]
  i2016.m_HashCode = i2017[1]
  i2016.m_ElementType = i2017[2]
  i2016.m_Unicode = i2017[3]
  i2016.m_GlyphIndex = i2017[4]
  i2016.m_Scale = i2017[5]
  return i2016
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2020 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2021 = data
  request.r(i2021[0], i2021[1], 0, i2020, 'sprite')
  i2020.m_Index = i2021[2]
  i2020.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2021[3], i2020.m_Metrics)
  i2020.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2021[4], i2020.m_GlyphRect)
  i2020.m_Scale = i2021[5]
  i2020.m_AtlasIndex = i2021[6]
  i2020.m_ClassDefinitionType = i2021[7]
  return i2020
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2022 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2023 = data
  var i2025 = i2023[0]
  var i2024 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2025.length; i += 1) {
    i2024.add(request.d('TMPro.TMP_Style', i2025[i + 0]));
  }
  i2022.m_StyleList = i2024
  return i2022
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2028 = root || request.c( 'TMPro.TMP_Style' )
  var i2029 = data
  i2028.m_Name = i2029[0]
  i2028.m_HashCode = i2029[1]
  i2028.m_OpeningDefinition = i2029[2]
  i2028.m_ClosingDefinition = i2029[3]
  i2028.m_OpeningTagArray = i2029[4]
  i2028.m_ClosingTagArray = i2029[5]
  i2028.m_OpeningTagUnicodeArray = i2029[6]
  i2028.m_ClosingTagUnicodeArray = i2029[7]
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2031 = data
  var i2033 = i2031[0]
  var i2032 = []
  for(var i = 0; i < i2033.length; i += 1) {
    i2032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2033[i + 0]) );
  }
  i2030.files = i2032
  i2030.componentToPrefabIds = i2031[1]
  return i2030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2037 = data
  i2036.path = i2037[0]
  request.r(i2037[1], i2037[2], 0, i2036, 'unityObject')
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2039 = data
  var i2041 = i2039[0]
  var i2040 = []
  for(var i = 0; i < i2041.length; i += 1) {
    i2040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2041[i + 0]) );
  }
  i2038.scriptsExecutionOrder = i2040
  var i2043 = i2039[1]
  var i2042 = []
  for(var i = 0; i < i2043.length; i += 1) {
    i2042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2043[i + 0]) );
  }
  i2038.sortingLayers = i2042
  var i2045 = i2039[2]
  var i2044 = []
  for(var i = 0; i < i2045.length; i += 1) {
    i2044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2045[i + 0]) );
  }
  i2038.cullingLayers = i2044
  i2038.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2039[3], i2038.timeSettings)
  i2038.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2039[4], i2038.physicsSettings)
  i2038.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2039[5], i2038.physics2DSettings)
  i2038.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2039[6], i2038.qualitySettings)
  i2038.enableRealtimeShadows = !!i2039[7]
  i2038.enableAutoInstancing = !!i2039[8]
  i2038.enableStaticBatching = !!i2039[9]
  i2038.enableDynamicBatching = !!i2039[10]
  i2038.lightmapEncodingQuality = i2039[11]
  i2038.desiredColorSpace = i2039[12]
  var i2047 = i2039[13]
  var i2046 = []
  for(var i = 0; i < i2047.length; i += 1) {
    i2046.push( i2047[i + 0] );
  }
  i2038.allTags = i2046
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2051 = data
  i2050.name = i2051[0]
  i2050.value = i2051[1]
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2055 = data
  i2054.id = i2055[0]
  i2054.name = i2055[1]
  i2054.value = i2055[2]
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2059 = data
  i2058.id = i2059[0]
  i2058.name = i2059[1]
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2061 = data
  i2060.fixedDeltaTime = i2061[0]
  i2060.maximumDeltaTime = i2061[1]
  i2060.timeScale = i2061[2]
  i2060.maximumParticleTimestep = i2061[3]
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2063 = data
  i2062.gravity = new pc.Vec3( i2063[0], i2063[1], i2063[2] )
  i2062.defaultSolverIterations = i2063[3]
  i2062.bounceThreshold = i2063[4]
  i2062.autoSyncTransforms = !!i2063[5]
  i2062.autoSimulation = !!i2063[6]
  var i2065 = i2063[7]
  var i2064 = []
  for(var i = 0; i < i2065.length; i += 1) {
    i2064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2065[i + 0]) );
  }
  i2062.collisionMatrix = i2064
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2069 = data
  i2068.enabled = !!i2069[0]
  i2068.layerId = i2069[1]
  i2068.otherLayerId = i2069[2]
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2071 = data
  request.r(i2071[0], i2071[1], 0, i2070, 'material')
  i2070.gravity = new pc.Vec2( i2071[2], i2071[3] )
  i2070.positionIterations = i2071[4]
  i2070.velocityIterations = i2071[5]
  i2070.velocityThreshold = i2071[6]
  i2070.maxLinearCorrection = i2071[7]
  i2070.maxAngularCorrection = i2071[8]
  i2070.maxTranslationSpeed = i2071[9]
  i2070.maxRotationSpeed = i2071[10]
  i2070.baumgarteScale = i2071[11]
  i2070.baumgarteTOIScale = i2071[12]
  i2070.timeToSleep = i2071[13]
  i2070.linearSleepTolerance = i2071[14]
  i2070.angularSleepTolerance = i2071[15]
  i2070.defaultContactOffset = i2071[16]
  i2070.autoSimulation = !!i2071[17]
  i2070.queriesHitTriggers = !!i2071[18]
  i2070.queriesStartInColliders = !!i2071[19]
  i2070.callbacksOnDisable = !!i2071[20]
  i2070.reuseCollisionCallbacks = !!i2071[21]
  i2070.autoSyncTransforms = !!i2071[22]
  var i2073 = i2071[23]
  var i2072 = []
  for(var i = 0; i < i2073.length; i += 1) {
    i2072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2073[i + 0]) );
  }
  i2070.collisionMatrix = i2072
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2077 = data
  i2076.enabled = !!i2077[0]
  i2076.layerId = i2077[1]
  i2076.otherLayerId = i2077[2]
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2079 = data
  var i2081 = i2079[0]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 1) {
    i2080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2081[i + 0]) );
  }
  i2078.qualityLevels = i2080
  var i2083 = i2079[1]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.push( i2083[i + 0] );
  }
  i2078.names = i2082
  i2078.shadows = i2079[2]
  i2078.anisotropicFiltering = i2079[3]
  i2078.antiAliasing = i2079[4]
  i2078.lodBias = i2079[5]
  i2078.shadowCascades = i2079[6]
  i2078.shadowDistance = i2079[7]
  i2078.shadowmaskMode = i2079[8]
  i2078.shadowProjection = i2079[9]
  i2078.shadowResolution = i2079[10]
  i2078.softParticles = !!i2079[11]
  i2078.softVegetation = !!i2079[12]
  i2078.activeColorSpace = i2079[13]
  i2078.desiredColorSpace = i2079[14]
  i2078.masterTextureLimit = i2079[15]
  i2078.maxQueuedFrames = i2079[16]
  i2078.particleRaycastBudget = i2079[17]
  i2078.pixelLightCount = i2079[18]
  i2078.realtimeReflectionProbes = !!i2079[19]
  i2078.shadowCascade2Split = i2079[20]
  i2078.shadowCascade4Split = new pc.Vec3( i2079[21], i2079[22], i2079[23] )
  i2078.streamingMipmapsActive = !!i2079[24]
  i2078.vSyncCount = i2079[25]
  i2078.asyncUploadBufferSize = i2079[26]
  i2078.asyncUploadTimeSlice = i2079[27]
  i2078.billboardsFaceCameraPosition = !!i2079[28]
  i2078.shadowNearPlaneOffset = i2079[29]
  i2078.streamingMipmapsMemoryBudget = i2079[30]
  i2078.maximumLODLevel = i2079[31]
  i2078.streamingMipmapsAddAllCameras = !!i2079[32]
  i2078.streamingMipmapsMaxLevelReduction = i2079[33]
  i2078.streamingMipmapsRenderersPerFrame = i2079[34]
  i2078.resolutionScalingFixedDPIFactor = i2079[35]
  i2078.streamingMipmapsMaxFileIORequests = i2079[36]
  i2078.currentQualityLevel = i2079[37]
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings' )
  var i2087 = data
  i2086.Event = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2087[0], i2086.Event)
  i2086.filterSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings', i2087[1], i2086.filterSettings)
  i2086.overrideMaterialId = i2087[2]
  i2086.overrideMaterialPassIndex = i2087[3]
  i2086.overrideShaderId = i2087[4]
  i2086.overrideShaderPassIndex = i2087[5]
  i2086.overrideMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2087[6], i2086.overrideMode)
  i2086.overrideDepthState = !!i2087[7]
  i2086.depthCompareFunction = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2087[8], i2086.depthCompareFunction)
  i2086.enableWrite = !!i2087[9]
  i2086.stencilSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.StencilStateData', i2087[10], i2086.stencilSettings)
  i2086.cameraSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings', i2087[11], i2086.cameraSettings)
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2091 = data
  i2090.mode = i2091[0]
  i2090.parameter = i2091[1]
  i2090.threshold = i2091[2]
  return i2090
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2092 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2093 = data
  i2092.xPlacement = i2093[0]
  i2092.yPlacement = i2093[1]
  i2092.xAdvance = i2093[2]
  i2092.yAdvance = i2093[3]
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.EnumDescription"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.EnumDescription' )
  var i2095 = data
  i2094.Value = i2095[0]
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings"] = function (request, data, root) {
  var i2096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings' )
  var i2097 = data
  i2096.RenderQueueType = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2097[0], i2096.RenderQueueType)
  i2096.LayerMask = i2097[1]
  var i2099 = i2097[2]
  var i2098 = []
  for(var i = 0; i < i2099.length; i += 1) {
    i2098.push( i2099[i + 0] );
  }
  i2096.PassNames = i2098
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.StencilStateData"] = function (request, data, root) {
  var i2100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.StencilStateData' )
  var i2101 = data
  i2100.overrideStencilState = !!i2101[0]
  i2100.stencilReference = i2101[1]
  i2100.stencilCompareFunctionValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2101[2], i2100.stencilCompareFunctionValue)
  i2100.passOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2101[3], i2100.passOperationValue)
  i2100.failOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2101[4], i2100.failOperationValue)
  i2100.zFailOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2101[5], i2100.zFailOperationValue)
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings"] = function (request, data, root) {
  var i2102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings' )
  var i2103 = data
  i2102.overrideCamera = !!i2103[0]
  i2102.restoreCamera = !!i2103[1]
  i2102.offset = new pc.Vec4( i2103[2], i2103[3], i2103[4], i2103[5] )
  i2102.cameraFieldOfView = i2103[6]
  return i2102
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D":{"size":0,"direction":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsRenderingMode":0,"LightRenderingMode":1,"MainLightRenderingModeValue":2,"SupportsMainLightShadows":3,"MainLightShadowmapResolutionValue":4,"SupportsSoftShadows":5,"SoftShadowQualityValue":6,"ShadowDistance":7,"ShadowCascadeCount":8,"Cascade2Split":9,"Cascade3Split":10,"Cascade4Split":12,"CascadeBorder":15,"ShadowDepthBias":16,"ShadowNormalBias":17,"RequireDepthTexture":18,"RequireOpaqueTexture":19,"scriptableRendererData":20},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData":{"opaqueLayerMask":0,"transparentLayerMask":1,"RenderObjectsFeatures":2,"name":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects":{"settings":0,"name":1,"typeName":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings":{"Event":0,"filterSettings":1,"overrideMaterialId":2,"overrideMaterialPassIndex":3,"overrideShaderId":4,"overrideShaderPassIndex":5,"overrideMode":6,"overrideDepthState":7,"depthCompareFunction":8,"enableWrite":9,"stencilSettings":10,"cameraSettings":11},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.EnumDescription":{"Value":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings":{"RenderQueueType":0,"LayerMask":1,"PassNames":2},"Luna.Unity.DTO.UnityEngine.Assets.StencilStateData":{"overrideStencilState":0,"stencilReference":1,"stencilCompareFunctionValue":2,"passOperationValue":3,"failOperationValue":4,"zFailOperationValue":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings":{"overrideCamera":0,"restoreCamera":1,"offset":2,"cameraFieldOfView":6}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[8],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[19],"62":[19],"63":[19],"64":[19],"65":[19],"66":[19],"67":[19],"68":[19],"69":[19],"70":[19],"71":[19],"72":[19],"73":[19],"74":[8],"75":[76],"77":[78],"79":[78],"26":[25],"80":[25],"81":[8],"10":[8],"82":[83],"84":[85],"86":[25],"87":[25],"29":[26],"33":[30,25],"88":[25],"28":[26],"89":[25],"90":[25],"91":[25],"92":[25],"93":[25],"94":[25],"95":[25],"96":[25],"97":[25],"98":[30,25],"99":[25],"100":[25],"101":[25],"102":[25],"23":[30,25],"103":[25],"104":[35],"105":[35],"36":[35],"106":[35],"107":[8],"108":[8],"109":[85],"110":[35],"111":[26],"112":[25],"113":[76,25],"114":[25,30],"115":[25],"116":[30,25],"117":[76],"118":[30,25],"119":[25],"120":[85]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","MoveBehavior","UnityEngine.BoxCollider2D","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","DeviceManager","UnityEngine.Rendering.Universal.Light2D","UnityEngine.AudioSource","LoopGround","PipeSpawner","UnityEngine.GameObject","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Rigidbody2D","UnityEngine.CapsuleCollider2D","FlyBehavior","GameManager","UnityEngine.UI.Text","UnityEngine.AudioClip","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Outline","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Texture2D","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Light","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "Flappy bugs";

Deserializers.lunaInitializationTime = "03/20/2026 02:54:46";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "Flappy-Bird";

Deserializers.lunaAppID = "37659";

Deserializers.projectId = "01ab84a6aeeaa1c4899edf3783d736a5";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.14.2\ncom.unity.render-pipelines.universal: 17.0.4\ncom.unity.textmeshpro: 3.0.9\ncom.unity.timeline: 1.8.9\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1715";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3846";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.UnityTechnologies.com.unity.template.urpblank";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "6a01fa83-9491-4910-b336-cd8a64271818";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

