<?php 
	session_start();

	if (isset($_SESSION['eunik_lang']))
	{
		$lang = $_SESSION['eunik_lang'];
	}
	else
	{
		$lang = "eng";
		$_SESSION['eunik_lang'] = "eng";
	}

	
	if ($lang != "eng" && $lang != "ch" && $lang != "bm")
	{
		$lang = "eng";
	}

	if (!isset($_SESSION['eunik_member_login'])) { $_SESSION['eunik_member_login'] = ""; }
	if (!isset($_SESSION['eunik_member_uid'])) { $_SESSION['eunik_member_uid'] = ""; }
	if (!isset($_SESSION['eunik_member_type1'])) { $_SESSION['eunik_member_type'] = ""; }
	if (!isset($_SESSION['eunik_member_type2'])) { $_SESSION['eunik_member_type'] = ""; }

	if (!isset($_SESSION['eunik_member_checkout_post_address'])) { $_SESSION['eunik_member_checkout_post_address'] = ""; }
	//if (!isset($_SESSION['eunik_member_checkout_bill_address'])) { $_SESSION['eunik_member_checkout_bill_address'] = ""; }

	
	

	if (!isset($_COOKIE["eunikcart"])) { $_COOKIE["eunikcart"] = ""; }

	if (isset($current_page))
	{
		if ($current_page == "login" || $current_page == "add_wishlist" || $current_page == "cart_act")
		{
			// do nothing;
		}
		else
		{
			$_SESSION['eunik_action'] = "";
			$_SESSION['eunik_product_uid'] = "";
		}
	}
	else
	{
		$_SESSION['eunik_action'] = "";
		$_SESSION['eunik_product_uid'] = "";
	}
	
	date_default_timezone_set('Asia/Kuala_Lumpur');



	//HTML Page Title
	$documentTitle = "Unik Edu Solution";
	$footerCopyRightText = "Copyright &copy; " . date("Y") . " Unik Edu Solution. All Rights Reserved.";
	$current_page = "";

	// SERVER	
	$dbh = mysqli_connect("110.4.46.101", "eunik", "Eunik123+");
	//$dbh = mysqli_connect("localhost", "root", "");
	mysqli_set_charset($dbh, "utf8");
	
	if (!$dbh){
		die('Cannot connect to the database because: ' . mysqli_error());
  	}
	

	mysqli_select_db($dbh, "eunik");

	function showRating($pAverageRating)
	{
		$average_rating = $pAverageRating;
		$rating_remain = 0;

		if (strpos($average_rating, '.') !== false)
		{
			$parse = explode (".", $average_rating);
			$rating_remain = (int) substr($parse[1], 0, 1);
		}

		for ($rate_star=1; $rate_star<=5; $rate_star++)
		{
			if ($rate_star <= $average_rating)
			{
				$li_class = "t_red";
				$i_class = "fa fa-star";
			}
			else
			{
				if ($rating_remain >= 3 && $rating_remain <= 7)
				{
					$li_class = "t_red";
					$i_class = "fa fa-star-half-o";
					$rating_remain = 0;
				}
				elseif ($rating_remain > 7)
				{
					$li_class = "t_red";
					$i_class = "fa fa-star";
					$rating_remain = 0;
				}
				else
				{
					$li_class = "t_stars";
					$i_class = "fa fa-star";
				}
			}
			echo "<li class='" . $li_class . "'><i class='" . $i_class . "'></i></li>";
		}
	}


	function sendOrderEmail($pReferenceNumber, $pPaymentMethod, $pMemberUID)
	{
		global $dbh;

		$reference_number = $pReferenceNumber;
		$payment_method = $pPaymentMethod;
		$member_uid = $pMemberUID;

		$today = date("Y-m-d H:i:s");

		$result = mysqli_query($dbh, "SELECT * FROM purchase_order WHERE reference_number='$reference_number' AND PaymentMethod='$payment_method' LIMIT 1");
		if ( mysqli_num_rows($result) > 0 )
		{
			while($row = mysqli_fetch_array($result))
			{
				$po_uid = $row['uid'];
				$reference_number = $row['reference_number'];
				$member_uid = $row['memberUID'];
				$sub_total = $row['SubTotal'];
				$shipping_fee = $row['shippingFee'];
				$payable_amount = $row['PayableAmount'];
				$shipping_name = $row['ShippingName'];
				$shipping_address = $row['ShippingAddress'];
				//$billing_name = $row['BillName'];
				//$billing_address = $row['BillAddress'];

				$sub_total = number_format($sub_total, 2);
				$shipping_fee = number_format($shipping_fee, 2);
				$payable_amount = number_format($payable_amount, 2);
				
				$result2 = mysqli_query($dbh, "SELECT * FROM member WHERE uid='$member_uid' LIMIT 1");
				{
					if ( mysqli_num_rows($result2) > 0 )
					{
						while($row2 = mysqli_fetch_array($result2))
						{
							$member_name = $row2['fullName'];
							$member_email = $row2['emailAddress'];
						}
					}
				}
			}
				
			require_once('class.phpmailer.php');
			include("class.smtp.php"); // optional, gets called from within class.phpmailer.php if not already loaded

			/* SEND EMAIL TO CUSTOMER */
			$order_url = "www.e-unik.com.my";

			$mail_host = "mail.e-unik.com.my";
			$host_name = "Unik Edu Solution";
			$host_email = "noreply@e-unik.com.my";
			$host_password = "web+2018";

			$mail = new PHPMailer(true); //defaults to using php "mail()"; the true param means it will throw exceptions on errors, which we need to catch
			$mail->IsSMTP(); // telling the class to use SMTP
			$mail->Host       = $mail_host; // SMTP server
			$mail->SMTPDebug  = false;                     // enables SMTP debug information (for testing)
														// false = don't display any message after send
														// 1 = errors and messages
														// 2 = messages only<br>
				
			$mail->SMTPAuth   = true;                  // enable SMTP authentication
			$mail->Host       = $mail_host; // sets the SMTP server
			$mail->Port       = 25;                    // set the SMTP port for the GMAIL server
			$mail->Username   = $host_email; // SMTP account username
			$mail->Password   = $host_password;        // SMTP account password
			$mail->AddEmbeddedImage("email_header.jpg", "email-header", "email_header.jpg");
			$sender_name = $host_email;
			$recipient_name = $member_name;
			$recipient_email = $member_email;
						
			$html_body_item_detail = "";
			$image_count = 0;
			//$delivery_date = date("l F d, Y", strtotime($DeliveryDate));

			$result_order_detail = mysqli_query($dbh, "SELECT * FROM purchase_order_detail WHERE po_uid='$po_uid' ORDER BY uid ASC");

			while($row_order_detail = mysqli_fetch_array($result_order_detail))
			{
				$product_uid = $row_order_detail['product_uid'];
				$ProductName = $row_order_detail['productName'];
				$Quantity = $row_order_detail['quantity'];
				$UnitPrice = $row_order_detail['unit_price'];
				$Amount = $row_order_detail['amount'];
								
				$result_product = mysqli_query($dbh, "SELECT * FROM product WHERE uid='$product_uid' LIMIT 1");
				if ( mysqli_num_rows($result_product) > 0 )
				{
					while($row_product = mysqli_fetch_array($result_product))
					{
						$image = $row_product['images'];
						$image_parse = explode("^", $image);
						$img = "img/shop/" . $image_parse[0];
						$image_count = $image_count + 1;
						$image_id = "img" . $image_count;
											
						$mail->AddEmbeddedImage($img, $image_id, $img);
					}
				}

				$html_body_item_detail = $html_body_item_detail . "<table style='border: 1px dashed #323232; width: 100%; font-size: 12px;' >
										<tr>
											<td style='border-right: 1px dashed #323232;  width: 200px; text-align: center;'><img src='cid:" . $image_id . "' width='80' height='auto' alt=''>
											</td>
														
														<td style='border-right: 1px dashed #323232; padding: 10px;  width: 250px;' valign='top'>
															<!-- product name -->
															<table>
																<tr><td style='font-size: 16px;'><strong>" . $ProductName . "</strong></td></tr>
																<tr><td><strong>Qty:</strong> " . $Quantity . "</td></tr>
																<tr><td><strong>Price:</strong> RM " . $UnitPrice . "</td></tr>
															</table>
														</td>
														<td valign='top' style='padding: 10px; font-weight: bold;'>RM " . $Amount . "</td>
														</tr>
													</table>";
			} // while($row_order_detail = mysqli_fetch_array($result_order_detail))


				$msg = "<html>
								<body yahoo='yahoo'>
								<table width='100%'  cellspacing='0' cellpadding='0'>
									<tbody>
									<tr>

										<td><table width='100%'  align='center' cellpadding='0' cellspacing='0'>
											<!-- Main Wrapper Table with initial width set to 100% -->
											<tbody>
											<tr> 
												<!-- HTML Spacer row -->
												<td style='font-size: 0; line-height: 0;' height='20'><table width='96%' align='left'  cellpadding='0' cellspacing='0'>
													<tr>
													<td style='font-size: 0; line-height: 0;' height='20'>&nbsp;</td>
													</tr>
												</table></td>
											</tr>
											<tr> 
												<!-- HTML IMAGE SPACER -->
												<td style='font-size: 0; line-height: 0;' height='20'><table align='left'  cellpadding='0' cellspacing='0' >
													<tr>
													<td align='center'><img src='cid:email-header' alt='' height='auto' width='100%' class=''></td>
													</tr>
												</table></td>
											</tr>
											<tr> 
				
												<!-- HTML Spacer row -->
												<td style='font-size: 0; line-height: 0;' height='20'><table width='96%' align='left'  cellpadding='0' cellspacing='0'>
													<tr>
													<td style='font-size: 0; line-height: 0;' height='20'>&nbsp;</td>
													</tr>
												</table></td>
											</tr>
											<tr> 
												<!-- Introduction area -->
												<td>
													<table>
													<tr>
													<td style='font-size: 14px; font-weight: bold;'>Dear " . $member_name . ", <br/>&nbsp;</td>
													</tr>
													<tr>
													<td style='font-size: 14px;'>
													This is an automated response confirming the receipt of your order which has been assigned the reference number <strong>" . $reference_number . "</strong>. Please keep this reference number for your record.
													<br/><br/>
													If you had made the payment by cash deposit or cheque, please send us a copy of the bank-in slip or cheque, together with the reference number, by email to admin@e-unik.com.my, or fax at 03-9074 9198.
													<br/><br/>
													Please allow us a maximum of 3 working days to confirm your payment. An official receipt will be sent to you once your payment is verified.
													<br/><br/>
													If you have any questions or would like to make corrections to your order, please contact us at:
													<br/><br/>
													<strong>UNIK EDU SOLUTION SDN BHD</strong><br/>
													17, Jalan Emas 4,<br/>Taman Emas,<br/>43200 Batu 9 Cheras,<br/>Kajang,<br/>Selangor.
													<br/><br/>
													Tel: (6)03- 9081 7093
													<br/>
													Fax: (6)03- 9074 9198
													<br/>
													Email: admin@e-unik.com.my
													</td>
													</tr>
													<tr>
													<td>&nbsp;<br/>&nbsp;</td>
												</tr>
											</table>
												</td>
											</tr>
												
												
											<tr> 
												<!-- Order tracking -->
												<td>
													<table style='background-color: #D0D0D0; padding: 10px; width: 600px;'>
														<tr>
														<td style='font-size: 14px; padding-bottom: 10px;'>Your Order will be delivered to:</td>
														</tr>
														<tr>
														<td style='font-size: 14px;'><strong>" . $shipping_name . "</strong></td>
														</tr>
														<tr>
														<td style='font-size: 14px; padding-bottom: 10px;'>" . $shipping_address . "</td>
														</tr>
													</table>
												</td>
											</tr>
												
											<tr> 
												<!-- HTML Spacer row -->
												<td style='font-size: 0; line-height: 0;' height='20'><table width='96%' align='left'  cellpadding='0' cellspacing='0'>
													<tr>
													<td style='font-size: 0; line-height: 0;' height='20'>&nbsp;</td>
													</tr>
												</table></td>
											</tr>" . $html_body_item_detail . "
											<!-- subtotal -->
												<tr>
												<td align='right' valign='top' style='font-size: 12px; padding: 10px'>
													<table>
														<tr>
														<td width='210px;' align='right'>Payment status :</td>
														<td width='200px;' align='right' style='color: #ff1a1a;'><strong>PENDING</strong></td>
														</tr>
														<tr>
														<td width='210px;' align='right'>Subtotal :</td>
														<td width='200px;' align='right'>RM " . $sub_total . "</td>
														</tr>
														<tr>
														<td width='210px;' align='right'>Shipping fee :</td>
														<td align='right'>RM " . $shipping_fee . "</td>
														</tr>
														<tr>
														<td width='2010px;' align='right' style='padding-top: 10px;'><strong>Total :</strong></td>
														<td width='200px;' align='right' style='padding-top: 10px; font-size: 21px; color: #FF9500;'>RM " . $payable_amount . "</td>
														</tr>
													</table>
												</td></tr>
						
												<tr> 
												<!-- HTML Spacer row -->
												<td style='font-size: 0; line-height: 0;' height='20'><table width='96%' align='left'  cellpadding='0' cellspacing='0'>
													<tr>
													<td style='font-size: 0; line-height: 0;' height='20'>&nbsp;</td>
													</tr>
												</table></td>
											</tr>

											<tr> 
											<!-- Footer  -->
											<td style='font-size: 0; line-height: 0; background-color: #D0D0D0; padding: 10px;' height='50' valign='top'>
												<p style='font-size: 12px; line-height: 20px;'>Need help?</p>
												<p style='font-size: 12px; '>Visit our <a href='http://www.e-unik.com.my/contact_us.php'>Help Center</a> for latest tips or you can leave us a message at our Contact page. </p>
											</td>
										</tr>
											
										</tbody>
									</table></td>
								</tr>
								</tbody>
							</table>
							</body>
							</html>";
						
						
						
			try 
			{
				$mail->AddAddress($recipient_email, $recipient_name);
				$mail->SetFrom($host_email, $host_name);
				$mail->Subject = 'Unik Edu Solution - your order details';
				$mail->AltBody = 'To view the message, please use an HTML compatible email viewer!'; // optional - MsgHTML will create an alternate automatically
				$mail->MsgHTML($msg);
				$mail->CharSet="UTF-8"; // <-- Put right encoding here
				$mail->Send();  
				//  header("Location: home.php");
				//echo "send";
			} 
			catch (phpmailerException $e) 
			{
				//echo $e->errorMessage(); //Pretty error messages from PHPMailer
			} 
			catch (Exception $e) 
			{
			//	echo $e->getMessage(); //Boring error messages from anything else!
			}


						/* SEND EMAIL TO ADMIN */
						$order_url = "www.e-unik.com.my";

						$mail_host = "mail.e-unik.com.my";
						$host_name = "Unik Edu Solution";
						$host_email = "noreply@e-unik.com.my";
						$host_password = "web+2018";
			
						$mail = new PHPMailer(true); //defaults to using php "mail()"; the true param means it will throw exceptions on errors, which we need to catch
						$mail->IsSMTP(); // telling the class to use SMTP
						$mail->Host       = $mail_host; // SMTP server
						$mail->SMTPDebug  = false;                     // enables SMTP debug information (for testing)
																	// false = don't display any message after send
																	// 1 = errors and messages
																	// 2 = messages only<br>
							
						$mail->SMTPAuth   = true;                  // enable SMTP authentication
						$mail->Host       = $mail_host; // sets the SMTP server
						$mail->Port       = 25;                    // set the SMTP port for the GMAIL server
						$mail->Username   = $host_email; // SMTP account username
						$mail->Password   = $host_password;        // SMTP account password
						$mail->AddEmbeddedImage("email_header.jpg", "email-header", "email_header.jpg");
						$sender_name = $host_email;
						$recipient_name = "admin@e-unik.com.my";
						$recipient_email = "admin@e-unik.com.my";
									
						$html_body_item_detail = "";
						$image_count = 0;
						//$delivery_date = date("l F d, Y", strtotime($DeliveryDate));
			
						$result_order_detail = mysqli_query($dbh, "SELECT * FROM purchase_order_detail WHERE po_uid='$po_uid' ORDER BY uid ASC");
						while($row_order_detail = mysqli_fetch_array($result_order_detail))
						{
							$product_uid = $row_order_detail['product_uid'];
							$ProductName = $row_order_detail['productName'];
							$Quantity = $row_order_detail['quantity'];
							$UnitPrice = $row_order_detail['unit_price'];
							$Amount = $row_order_detail['amount'];
											
							$result_product = mysqli_query($dbh, "SELECT * FROM product WHERE uid='$product_uid' LIMIT 1");
							if ( mysqli_num_rows($result_product) > 0 )
							{
								while($row_product = mysqli_fetch_array($result_product))
								{
									$image = $row_product['images'];
									$image_parse = explode("^", $image);
									$img = "img/shop/" . $image_parse[0];
									$image_count = $image_count + 1;
									$image_id = "img" . $image_count;
														
									$mail->AddEmbeddedImage($img, $image_id, $img);
								}
							}
			
							$html_body_item_detail = $html_body_item_detail . "<table style='border: 1px dashed #323232; width: 100%; font-size: 12px;' >
													<tr>
														<td style='border-right: 1px dashed #323232;  width: 200px; text-align: center;'><img src='cid:" . $image_id . "' width='80' height='auto' alt=''>
														</td>
																	
																	<td style='border-right: 1px dashed #323232; padding: 10px;  width: 250px;' valign='top'>
																		<!-- product name -->
																		<table>
																			<tr><td style='font-size: 16px;'><strong>" . $ProductName . "</strong></td></tr>
																			<tr><td><strong>Qty: </strong>" . $Quantity . "</td></tr>
																			<tr><td><strong>Price: </strong>RM " . $UnitPrice . "</td></tr>
																		</table>
																	</td>
																	<td valign='top' style='padding: 10px; font-weight: bold;'>RM " . $Amount . "</td>
																	</tr>
																</table>";
						} // while($row_order_detail = mysqli_fetch_array($result_order_detail))
					
					
							$msg = "<html>
											<body yahoo='yahoo'>
											<table width='100%' cellspacing='0' cellpadding='0'>
												<tbody>
												<tr>
					
													<td><table width='100%'  align='center' cellpadding='0' cellspacing='0'>
														<!-- Main Wrapper Table with initial width set to 100% -->
														<tbody>
														<tr> 
															<!-- HTML Spacer row -->
															<td style='font-size: 0; line-height: 0;' height='20'><table width='96%' align='left'  cellpadding='0' cellspacing='0'>
																<tr>
																<td style='font-size: 0; line-height: 0;' height='20'>&nbsp;</td>
																</tr>
															</table></td>
														</tr>

														
														<tr> 
															<!-- Introduction area -->
															<td>
																<table>
																<tr>
																<td style='font-size: 14px; font-weight: bold;'>New order from www.e-unik.com.my <br/>&nbsp;</td>
																</tr>
																<tr>
																<td style='font-size: 14px;'>Reference number: <strong>" . $reference_number . "</strong></a> has been placed on <strong>" . $today . "</strong>, payment method: <strong>" . $payment_method . "</strong>.<br/>&nbsp;</td>
																</tr>
																<tr>
																<td></td>
																</tr>
														</table>
															</td>
														</tr>
															
															
														<tr> 
															<!-- Order tracking -->
															<td>
																<table style='background-color: #D0D0D0; padding: 10px; width: 600px;'>
																	<tr>
																	<td style='font-size: 14px; padding-bottom: 10px;'><strong>Shipping detail:</strong></td>
																	</tr>
																	<tr>
																	<td style='font-size: 14px;'>" . $shipping_name . "</td>
																	</tr>
																	<tr>
																	<td style='font-size: 14px; padding-bottom: 10px;'>" . $shipping_address . "</td>
																	</tr>
																</table>
															</td>
														</tr>
			
															
														<tr> 
															<!-- HTML Spacer row -->
															<td style='font-size: 0; line-height: 0;' height='20'><table width='96%' align='left'  cellpadding='0' cellspacing='0'>
																<tr>
																<td style='font-size: 0; line-height: 0;' height='20'>&nbsp;</td>
																</tr>
															</table></td>
														</tr>" . $html_body_item_detail . "
														<!-- subtotal -->
															<tr>
															<td align='right' valign='top' style='font-size: 12px; padding: 10px'>
																<table>
																<tr>
																<td width='210px;' align='right'>Payment status :</td>
																<td width='200px;' align='right' style='color: #ff1a1a;'><strong>PENDING</strong></td>
																</tr>
																<tr>
																<td width='210px;' align='right'>Subtotal :</td>
																<td width='200px;' align='right'>RM " . $sub_total . "</td>
																</tr>
																<tr>
																<td width='210px;' align='right'>Shipping fee :</td>
																<td align='right'>RM " . $shipping_fee . "</td>
																</tr>
																<tr>
																<td width='2010px;' align='right' style='padding-top: 10px;'><strong>Total :</strong></td>
																<td width='200px;' align='right' style='padding-top: 10px; font-size: 21px; color: #FF9500;'>RM " . $payable_amount . "</td>
																</tr>
																</table>
															</td></tr>
									
															<tr> 
															<!-- HTML Spacer row -->
															<td style='font-size: 0; line-height: 0;' height='20'><table width='96%' align='left'  cellpadding='0' cellspacing='0'>
																<tr>
																<td style='font-size: 0; line-height: 0;' height='20'>&nbsp;</td>
																</tr>
															</table></td>
														</tr>
														
													</tbody>
												</table></td>
											</tr>
											</tbody>
										</table>
										</body>
										</html>";
									
									
									
						try 
						{
							$mail->AddAddress($recipient_email, $recipient_name);
							$mail->SetFrom($host_email, $host_name);
							$mail->Subject = 'Unik Edu Solution - new order received';
							$mail->AltBody = 'To view the message, please use an HTML compatible email viewer!'; // optional - MsgHTML will create an alternate automatically
							$mail->MsgHTML($msg);
							$mail->CharSet="UTF-8"; // <-- Put right encoding here
							$mail->Send();  
							//  header("Location: home.php");
						} 
						catch (phpmailerException $e) 
						{
							//echo $e->errorMessage(); //Pretty error messages from PHPMailer
						} 
						catch (Exception $e) 
						{
							//echo $e->getMessage(); //Boring error messages from anything else!
						}


			$_SESSION['eunik_member_checkout_post_address'] = "";
			//$_SESSION['eunik_member_checkout_bill_address'] = "";
			setcookie("eunikcart", "");
			//header("Location: checkout_confirm.php?act=ozwi11927ntAXcurv&st=x5220DasCBP21asdES9&ac=BbbCee&method=ipay&k=15143xgaRsrurtjhg19698&po=" . $reference_number . "&kc=1818SSa8hSPthiasdfTJzwerkVtxsfsdOUX302xS");
		} // if ( mysqli_num_rows($result) > 0 )
	}
	
?>
