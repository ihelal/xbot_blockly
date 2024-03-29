import rospy, sys
import time
from xbot_control.srv import Pair, PairResponse

rate = rospy.Rate(10) # 10Hz
flag=False #time flag

def pair_controller():
    rospy.wait_for_service('pair')
    try:
        pair_ctl = rospy.ServiceProxy('pair', Pair)
        resp1 = pair_ctl("connect")
        return resp1.result
    except rospy.ServiceException, e:
        print "Service call failed: %s"%e

while not rospy.is_shutdown():
    if flag == False:
        flag =  pair_controller()
    elif flag == True:
        sys.exit()
    rate.sleep()

