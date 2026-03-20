if ( TRACE ) { TRACE( JSON.parse( '["DeviceManager#init","DeviceManager#Update","DeviceManager#ApplyCameraSize","DeviceManager#GetDeviceType","FlyBehavior#init","FlyBehavior#Start","FlyBehavior#Update","FlyBehavior#FixedUpdate","FlyBehavior#OnCollisionEnter2D","GameManager#init","GameManager#Awake","GameManager#Start","GameManager#StartGame","GameManager#GameOver","GameManager#RestartGame","GameManager#UpdateScore","GameManager#PlayHitClip","GameManager#PlayFlyClip","GameManager#PlayScoreClip","GameManager#PlayDieClip","LoopGround#init","LoopGround#Update","MoveBehavior#init","MoveBehavior#Update","MoveBehavior#OnTriggerEnter2D","PipeSpawner#init","PipeSpawner#Update","PipeSpawner#SpawnPipe"]' ) ); }
/**
 * @version 1.0.9575.20246
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*DeviceManager start.*/
    Bridge.define("DeviceManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            cam: null,
            phoneMultiplier: 0,
            tallPhoneMultiplier: 0,
            tabletMultiplier: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DeviceManager#init", this ); }

                this.phoneMultiplier = 1.1;
                this.tallPhoneMultiplier = 1.1;
                this.tabletMultiplier = 0.9;
            }
        },
        methods: {
            /*DeviceManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "DeviceManager#Update", this ); }

                this.ApplyCameraSize();
            },
            /*DeviceManager.Update end.*/

            /*DeviceManager.ApplyCameraSize start.*/
            ApplyCameraSize: function () {
if ( TRACE ) { TRACE( "DeviceManager#ApplyCameraSize", this ); }

                var aspect = UnityEngine.Screen.height / UnityEngine.Screen.width;

                var device = this.GetDeviceType(aspect);

                var multiplier = 1.0;

                switch (device) {
                    case DeviceManager.DeviceType.Phone: 
                        multiplier = this.phoneMultiplier;
                        UnityEngine.Debug.Log$1("Device: Phone");
                        break;
                    case DeviceManager.DeviceType.TallPhone: 
                        multiplier = this.tallPhoneMultiplier;
                        UnityEngine.Debug.Log$1("Device: Tall Phone");
                        break;
                    case DeviceManager.DeviceType.Tablet: 
                        multiplier = this.tabletMultiplier;
                        UnityEngine.Debug.Log$1("Device: Tablet");
                        break;
                }

                this.cam.orthographicSize = multiplier;
            },
            /*DeviceManager.ApplyCameraSize end.*/

            /*DeviceManager.GetDeviceType start.*/
            GetDeviceType: function (aspect) {
if ( TRACE ) { TRACE( "DeviceManager#GetDeviceType", this ); }

                // Common aspect ranges:
                // Tablet ≈ 4:3 → ~1.33
                // Phone ≈ 16:9 → ~1.77
                // Tall Phone ≈ 18:9+ → ~2.0+

                if (aspect < 1.5) {
                    return DeviceManager.DeviceType.Tablet;
                }

                if (aspect >= 1.5 && aspect < 1.9) {
                    return DeviceManager.DeviceType.Phone;
                }

                return DeviceManager.DeviceType.TallPhone;
            },
            /*DeviceManager.GetDeviceType end.*/


        }
    });
    /*DeviceManager end.*/

    /*DeviceManager+DeviceType start.*/
    Bridge.define("DeviceManager.DeviceType", {
        $kind: 1006,
        statics: {
            fields: {
                Phone: 0,
                TallPhone: 1,
                Tablet: 2
            }
        }
    });
    /*DeviceManager+DeviceType end.*/

    /*FlyBehavior start.*/
    Bridge.define("FlyBehavior", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _velocity: 0,
            _rotationSpeed: 0,
            _idleFloatAmplitude: 0,
            _idleFloatFrequency: 0,
            _rb: null,
            _collider: null,
            _idleStartPosition: null,
            _isIdleFloating: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FlyBehavior#init", this ); }

                this._idleStartPosition = new UnityEngine.Vector3();
                this._velocity = 1.5;
                this._rotationSpeed = 10.0;
                this._idleFloatAmplitude = 0.2;
                this._idleFloatFrequency = 2.0;
            }
        },
        methods: {
            /*FlyBehavior.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "FlyBehavior#Start", this ); }

                this._rb = this.GetComponent(UnityEngine.Rigidbody2D);
                this._collider = this.GetComponent(UnityEngine.CapsuleCollider2D);
                this._idleStartPosition = this.transform.position.$clone();
                this._isIdleFloating = !GameManager.Instance.IsGameStarted;

                if (this._isIdleFloating) {
                    this._rb.simulated = false;
                }
                this._collider.isTrigger = false;
            },
            /*FlyBehavior.Start end.*/

            /*FlyBehavior.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "FlyBehavior#Update", this ); }

                if (this._isIdleFloating && !GameManager.Instance.IsGameStarted) {
                    var floatOffset = Math.sin(UnityEngine.Time.unscaledTime * this._idleFloatFrequency) * this._idleFloatAmplitude;
                    this.transform.position = this._idleStartPosition.$clone().add( pc.Vec3.UP.clone().clone().scale( floatOffset ) );
                    this.transform.rotation = pc.Quat.IDENTITY.clone();
                }

                if (!GameManager.Instance.IsGameStarted && UnityEngine.Input.GetMouseButtonDown(0)) {
                    GameManager.Instance.StartGame();
                    this._isIdleFloating = false;
                    this._rb.simulated = true;
                    this._rb.velocity = pc.Vec2.UP.clone().scale( this._velocity );
                    return;
                }

                if (GameManager.Instance.IsGameStarted && UnityEngine.Input.GetMouseButtonDown(0)) {
                    this._rb.velocity = pc.Vec2.UP.clone().scale( this._velocity );
                    GameManager.Instance.PlayFlyClip();
                }
            },
            /*FlyBehavior.Update end.*/

            /*FlyBehavior.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "FlyBehavior#FixedUpdate", this ); }

                this.transform.rotation = new pc.Quat().lerpUnclamped( this.transform.rotation, new pc.Quat().setFromEulerAngles_Unity( 0, 0, this._rb.velocity.y * this._rotationSpeed ), pc.math.clamp( UnityEngine.Time.fixedDeltaTime * 10.0, 0, 1 ) );
            },
            /*FlyBehavior.FixedUpdate end.*/

            /*FlyBehavior.OnCollisionEnter2D start.*/
            OnCollisionEnter2D: function (collision) {
if ( TRACE ) { TRACE( "FlyBehavior#OnCollisionEnter2D", this ); }

                this._collider.isTrigger = true;
                GameManager.Instance.PlayHitClip();
                GameManager.Instance.PlayDieClip();
                GameManager.Instance.GameOver();
            },
            /*FlyBehavior.OnCollisionEnter2D end.*/


        }
    });
    /*FlyBehavior end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            IsGameStarted: false,
            IsGameOverState: false,
            _gameOverCanvas: null,
            _ingameCanvas: null,
            _homeCanvas: null,
            _scoreText: null,
            _audioSource: null,
            _hitClip: null,
            _scoreClip: null,
            _flyClip: null,
            _dieClip: null,
            _currentScore: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameManager#init", this ); }

                this._currentScore = 0;
            }
        },
        methods: {
            /*GameManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(GameManager.Instance, null)) {
                    GameManager.Instance = this;
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }

                this.IsGameStarted = false;
                this.IsGameOverState = false;

                this._gameOverCanvas.SetActive(false);
                this._homeCanvas.SetActive(true);
                this._ingameCanvas.SetActive(false);

                UnityEngine.Time.timeScale = 1.0;
            },
            /*GameManager.Awake end.*/

            /*GameManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameManager#Start", this ); }

                var $t;
                $t = Bridge.getEnumerator(this._scoreText);
                try {
                    while ($t.moveNext()) {
                        var text = $t.Current;
                        text.text = Bridge.toString(this._currentScore);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*GameManager.Start end.*/

            /*GameManager.StartGame start.*/
            StartGame: function () {
if ( TRACE ) { TRACE( "GameManager#StartGame", this ); }

                if (this.IsGameStarted || this.IsGameOverState) {
                    return;
                }

                this.IsGameStarted = true;

                this._gameOverCanvas.SetActive(false);
                this._homeCanvas.SetActive(false);
                this._ingameCanvas.SetActive(true);

                UnityEngine.Time.timeScale = 1.0;
            },
            /*GameManager.StartGame end.*/

            /*GameManager.GameOver start.*/
            GameOver: function () {
if ( TRACE ) { TRACE( "GameManager#GameOver", this ); }

                if (!this.IsGameStarted || this.IsGameOverState) {
                    return;
                }

                this.IsGameStarted = false;
                this.IsGameOverState = true;

                this._gameOverCanvas.SetActive(true);
                this._homeCanvas.SetActive(false);
                this._ingameCanvas.SetActive(false);
            },
            /*GameManager.GameOver end.*/

            /*GameManager.RestartGame start.*/
            RestartGame: function () {
if ( TRACE ) { TRACE( "GameManager#RestartGame", this ); }

                var $t;

                this.IsGameStarted = false;
                this.IsGameOverState = false;
                UnityEngine.SceneManagement.SceneManager.LoadScene(UnityEngine.SceneManagement.SceneManager.GetActiveScene().index);

                this._currentScore = 0;
                $t = Bridge.getEnumerator(this._scoreText);
                try {
                    while ($t.moveNext()) {
                        var text = $t.Current;
                        text.text = Bridge.toString(this._currentScore);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                UnityEngine.Time.timeScale = 0.0;
            },
            /*GameManager.RestartGame end.*/

            /*GameManager.UpdateScore start.*/
            UpdateScore: function () {
if ( TRACE ) { TRACE( "GameManager#UpdateScore", this ); }

                var $t;
                this._currentScore = (this._currentScore + 1) | 0;
                $t = Bridge.getEnumerator(this._scoreText);
                try {
                    while ($t.moveNext()) {
                        var text = $t.Current;
                        text.text = Bridge.toString(this._currentScore);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*GameManager.UpdateScore end.*/

            /*GameManager.PlayHitClip start.*/
            PlayHitClip: function () {
if ( TRACE ) { TRACE( "GameManager#PlayHitClip", this ); }

                this._audioSource.PlayOneShot(this._hitClip);
            },
            /*GameManager.PlayHitClip end.*/

            /*GameManager.PlayFlyClip start.*/
            PlayFlyClip: function () {
if ( TRACE ) { TRACE( "GameManager#PlayFlyClip", this ); }

                this._audioSource.PlayOneShot(this._flyClip);
            },
            /*GameManager.PlayFlyClip end.*/

            /*GameManager.PlayScoreClip start.*/
            PlayScoreClip: function () {
if ( TRACE ) { TRACE( "GameManager#PlayScoreClip", this ); }

                this._audioSource.PlayOneShot(this._scoreClip);
            },
            /*GameManager.PlayScoreClip end.*/

            /*GameManager.PlayDieClip start.*/
            PlayDieClip: function () {
if ( TRACE ) { TRACE( "GameManager#PlayDieClip", this ); }

                this._audioSource.PlayOneShot(this._dieClip);
            },
            /*GameManager.PlayDieClip end.*/


        }
    });
    /*GameManager end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*LoopGround start.*/
    Bridge.define("LoopGround", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _speed: 0,
            _maxRangeX: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LoopGround#init", this ); }

                this._speed = 1.0;
                this._maxRangeX = -1.0;
            }
        },
        methods: {
            /*LoopGround.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "LoopGround#Update", this ); }

                if (GameManager.Instance.IsGameOverState) {
                    return;
                }

                this.transform.position = this.transform.position.$clone().add( pc.Vec3.LEFT.clone().clone().scale( this._speed ).clone().scale( UnityEngine.Time.deltaTime ) );
                if (this.transform.position.x < this._maxRangeX) {
                    this.transform.position = new pc.Vec3( 0, this.transform.position.y, this.transform.position.z );
                }
            },
            /*LoopGround.Update end.*/


        }
    });
    /*LoopGround end.*/

    /*MoveBehavior start.*/
    Bridge.define("MoveBehavior", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _speed: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MoveBehavior#init", this ); }

                this._speed = 0.65;
            }
        },
        methods: {
            /*MoveBehavior.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "MoveBehavior#Update", this ); }

                if (GameManager.Instance.IsGameOverState) {
                    return;
                }
                this.transform.position = this.transform.position.$clone().add( pc.Vec3.LEFT.clone().clone().scale( this._speed ).clone().scale( UnityEngine.Time.deltaTime ) );

            },
            /*MoveBehavior.Update end.*/

            /*MoveBehavior.OnTriggerEnter2D start.*/
            OnTriggerEnter2D: function (other) {
if ( TRACE ) { TRACE( "MoveBehavior#OnTriggerEnter2D", this ); }

                if (other.gameObject.CompareTag("Player")) {
                    GameManager.Instance.UpdateScore();
                    GameManager.Instance.PlayScoreClip();
                }
            },
            /*MoveBehavior.OnTriggerEnter2D end.*/


        }
    });
    /*MoveBehavior end.*/

    /*PipeSpawner start.*/
    Bridge.define("PipeSpawner", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _maxTime: 0,
            _heightRange: 0,
            _pipePrefab: null,
            _timer: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PipeSpawner#init", this ); }

                this._maxTime = 1.5;
                this._heightRange = 1.5;
            }
        },
        methods: {
            /*PipeSpawner.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PipeSpawner#Update", this ); }

                if (GameManager.Instance.IsGameOverState) {
                    return;
                }

                if (GameManager.Instance.IsGameStarted) {
                    if (this._timer >= this._maxTime) {
                        this.SpawnPipe();
                        this._timer = 0.0;
                    }
                    this._timer += UnityEngine.Time.deltaTime;
                }
            },
            /*PipeSpawner.Update end.*/

            /*PipeSpawner.SpawnPipe start.*/
            SpawnPipe: function () {
if ( TRACE ) { TRACE( "PipeSpawner#SpawnPipe", this ); }

                var position = this.transform.position.$clone().add( new pc.Vec3( 0, UnityEngine.Random.Range$1(-this._heightRange, this._heightRange), 0 ) );
                var newPipe = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this._pipePrefab, position, pc.Quat.IDENTITY.clone());

                this.Destroy(newPipe, 10.0);
            },
            /*PipeSpawner.SpawnPipe end.*/


        }
    });
    /*PipeSpawner end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections.Generic"];

    /*DeviceManager start.*/
    $m("DeviceManager", function () { return {"nested":[DeviceManager.DeviceType],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplyCameraSize","t":8,"sn":"ApplyCameraSize","rt":$n[0].Void},{"a":1,"n":"GetDeviceType","t":8,"pi":[{"n":"aspect","pt":$n[0].Single,"ps":0}],"sn":"GetDeviceType","rt":DeviceManager.DeviceType,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, DeviceManager.DeviceType, System.Enum.toStringFn(DeviceManager.DeviceType));}},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"cam","t":4,"rt":$n[1].Camera,"sn":"cam"},{"at":[new UnityEngine.HeaderAttribute("Device Multipliers")],"a":2,"n":"phoneMultiplier","t":4,"rt":$n[0].Single,"sn":"phoneMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"tabletMultiplier","t":4,"rt":$n[0].Single,"sn":"tabletMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"tallPhoneMultiplier","t":4,"rt":$n[0].Single,"sn":"tallPhoneMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*DeviceManager end.*/

    /*DeviceManager+DeviceType start.*/
    $m("DeviceManager.DeviceType", function () { return {"td":DeviceManager,"att":259,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Phone","is":true,"t":4,"rt":DeviceManager.DeviceType,"sn":"Phone","box":function ($v) { return Bridge.box($v, DeviceManager.DeviceType, System.Enum.toStringFn(DeviceManager.DeviceType));}},{"a":2,"n":"Tablet","is":true,"t":4,"rt":DeviceManager.DeviceType,"sn":"Tablet","box":function ($v) { return Bridge.box($v, DeviceManager.DeviceType, System.Enum.toStringFn(DeviceManager.DeviceType));}},{"a":2,"n":"TallPhone","is":true,"t":4,"rt":DeviceManager.DeviceType,"sn":"TallPhone","box":function ($v) { return Bridge.box($v, DeviceManager.DeviceType, System.Enum.toStringFn(DeviceManager.DeviceType));}}]}; }, $n);
    /*DeviceManager+DeviceType end.*/

    /*FlyBehavior start.*/
    $m("FlyBehavior", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"collision","pt":$n[1].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[0].Void,"p":[$n[1].Collision2D]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_collider","t":4,"rt":$n[1].CapsuleCollider2D,"sn":"_collider"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_idleFloatAmplitude","t":4,"rt":$n[0].Single,"sn":"_idleFloatAmplitude","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_idleFloatFrequency","t":4,"rt":$n[0].Single,"sn":"_idleFloatFrequency","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_idleStartPosition","t":4,"rt":$n[1].Vector3,"sn":"_idleStartPosition"},{"a":1,"n":"_isIdleFloating","t":4,"rt":$n[0].Boolean,"sn":"_isIdleFloating","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_rb","t":4,"rt":$n[1].Rigidbody2D,"sn":"_rb"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_rotationSpeed","t":4,"rt":$n[0].Single,"sn":"_rotationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_velocity","t":4,"rt":$n[0].Single,"sn":"_velocity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*FlyBehavior end.*/

    /*GameManager start.*/
    $m("GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"GameOver","t":8,"sn":"GameOver","rt":$n[0].Void},{"a":2,"n":"PlayDieClip","t":8,"sn":"PlayDieClip","rt":$n[0].Void},{"a":2,"n":"PlayFlyClip","t":8,"sn":"PlayFlyClip","rt":$n[0].Void},{"a":2,"n":"PlayHitClip","t":8,"sn":"PlayHitClip","rt":$n[0].Void},{"a":2,"n":"PlayScoreClip","t":8,"sn":"PlayScoreClip","rt":$n[0].Void},{"a":2,"n":"RestartGame","t":8,"sn":"RestartGame","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StartGame","t":8,"sn":"StartGame","rt":$n[0].Void},{"a":2,"n":"UpdateScore","t":8,"sn":"UpdateScore","rt":$n[0].Void},{"a":2,"n":"IsGameOverState","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsGameOverState","t":8,"rt":$n[0].Boolean,"fg":"IsGameOverState","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_IsGameOverState","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"IsGameOverState"},"fn":"IsGameOverState"},{"a":2,"n":"IsGameStarted","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsGameStarted","t":8,"rt":$n[0].Boolean,"fg":"IsGameStarted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_IsGameStarted","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"IsGameStarted"},"fn":"IsGameStarted"},{"a":2,"n":"Instance","is":true,"t":4,"rt":GameManager,"sn":"Instance"},{"at":[new UnityEngine.HeaderAttribute("Sounds Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_audioSource","t":4,"rt":$n[1].AudioSource,"sn":"_audioSource"},{"a":1,"n":"_currentScore","t":4,"rt":$n[0].Int32,"sn":"_currentScore","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_dieClip","t":4,"rt":$n[1].AudioClip,"sn":"_dieClip"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_flyClip","t":4,"rt":$n[1].AudioClip,"sn":"_flyClip"},{"at":[new UnityEngine.HeaderAttribute("UI Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_gameOverCanvas","t":4,"rt":$n[1].GameObject,"sn":"_gameOverCanvas"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_hitClip","t":4,"rt":$n[1].AudioClip,"sn":"_hitClip"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_homeCanvas","t":4,"rt":$n[1].GameObject,"sn":"_homeCanvas"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_ingameCanvas","t":4,"rt":$n[1].GameObject,"sn":"_ingameCanvas"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_scoreClip","t":4,"rt":$n[1].AudioClip,"sn":"_scoreClip"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_scoreText","t":4,"rt":$n[2].List$1(UnityEngine.UI.Text),"sn":"_scoreText"},{"a":1,"backing":true,"n":"<IsGameOverState>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"IsGameOverState","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<IsGameStarted>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"IsGameStarted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*GameManager end.*/

    /*LoopGround start.*/
    $m("LoopGround", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_maxRangeX","t":4,"rt":$n[0].Single,"sn":"_maxRangeX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_speed","t":4,"rt":$n[0].Single,"sn":"_speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LoopGround end.*/

    /*MoveBehavior start.*/
    $m("MoveBehavior", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter2D","t":8,"pi":[{"n":"other","pt":$n[1].Collider2D,"ps":0}],"sn":"OnTriggerEnter2D","rt":$n[0].Void,"p":[$n[1].Collider2D]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_speed","t":4,"rt":$n[0].Single,"sn":"_speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*MoveBehavior end.*/

    /*PipeSpawner start.*/
    $m("PipeSpawner", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"SpawnPipe","t":8,"sn":"SpawnPipe","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_heightRange","t":4,"rt":$n[0].Single,"sn":"_heightRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_maxTime","t":4,"rt":$n[0].Single,"sn":"_maxTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_pipePrefab","t":4,"rt":$n[1].GameObject,"sn":"_pipePrefab"},{"a":1,"n":"_timer","t":4,"rt":$n[0].Single,"sn":"_timer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*PipeSpawner end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
