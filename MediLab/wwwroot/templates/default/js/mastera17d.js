$(function() {


	$(".cs_header_search_inp, .cs_main_search_inp").click(function(){

		//$(".cs_header_search_result").text('Yüklənir');
		
		if( $( document ).width() < 700 )
		{
			$(".cs_main_search_result").show();
			$(".cs_mobile_srcm_close").show();
			$(".cs_header_search_inp").addClass("cs_search_modal_fixed");
			$("html, body").animate({ scrollTop: 0 }, "slow");
		}
		else {
			
			$(".cs_header_search_result").show();
			$(".cs_mobile_srcm_close").hide();
			$(".cs_header_search_inp").removeClass("cs_search_modal_fixed");
		}

		
		$.get("/ajax/search_default_category.php", function (SrcDefData){
			$(".cs_header_search_result").html(SrcDefData);
			$(".cs_main_search_result").html(SrcDefData);
		});
		
	});

	
	$(".cs_mobile_srcm_close_link").click(function(){
		
		$(".cs_header_search_result").show();
		$(".cs_main_search_result").hide();
		$(".cs_mobile_srcm_close").hide();
		$(".cs_header_search_inp").removeClass("cs_search_modal_fixed");
		
	});
	

    $('[data-toggle="tooltip"]').tooltip()

    $("#cs_dc_tab_pan_1").show();
    $('#cs_mobile_menu_body_menu').show();





    var device_width = $(window).width();

    if (parseInt(device_width) < 700) {
        $(".cs_profile_premium_info_web").hide();
        $(".cs_profile_premium_info_mob").show();
    } else {
        $(".cs_profile_premium_info_web").show();
        $(".cs_profile_premium_info_mob").hide();
    }



    // SELECT PHOTO
    $(".cs_docp_open_desc").click(function() {
        $(".cs_docp_desc").css({"height":"auto"});
		$(".cs_docp_open_desc").hide();
    });


	// SELECT PHOTO
    $(".cs_product_image").click(function() {

        var product_image = $(this).data('photo');
        $("#cs_product_photo").html('<img src="' + product_image + '" />');

    });
	
	
	// SELECT LANGUAGE
    $(".cs_langluage_button").click(function() {

        var get_langluage = $(this).data('lang');

        window.location = "/lang/" + get_langluage;

    });


    $(document).on("click", ".cs_diseases_list", function() {

        var diseases_id = $(this).data('id');

        $(".cs_result_treating_diseases").html('');
        $("#cs_input_treating_diseases").val('');
        $(".cs_result_treating_diseases").show();

        $.get('/ajax/update_doctor_diseases.php', { "diseases_id": diseases_id }, function(StatusDocDisease) {

            $(".cs_result_treating_diseases").html('');
            $("#cs_table_treating_diseases").html(StatusDocDisease);
            $("#cs_input_treating_diseases").val('');
            $(".cs_result_treating_diseases").hide();

        });

    });



    $(document).on("click", ".cs_doc_disease_delete", function() {

        var disease_delete_id = $(this).data('id');

        $.get('/ajax/delete_doctor_diseases.php', { "disease_delete_id": disease_delete_id }, function(StatusDocDisease) {

            $("#cs_doctor_disease_" + disease_delete_id).remove();

        });

    });


    // DELETE DOCTOR CATEGORY
    $(".cs_doctor_category_delete").click(function() {

        var doctor_category = $(this).data('id');

        $('#cs_doctor_category_' + doctor_category + " select").val("");
        $('#cs_doctor_category_' + doctor_category).hide();

    });


    // PROFILE SUBMENU ON CLICK
    $(".cs_profile_submenu_link").click(function() {

        var menu_id = $(this).data('id');
        $('#cs_profile_submenu_' + menu_id).toggle();

    });


    // SRC SEARCH CATEGORY
    $(".cs_filter_src_category").keyup(function() {

        var filter_src_category = $(this).val();

        $.get('/ajax/filter_category.php', { "search_text": filter_src_category }, function(filter_search_data) {
            $("#cs_res_filter_src_category").html(filter_search_data);
        });

    });


    // XESTELIKLERIN MUALICESI
    //$("#cs_input_treating_diseases").keyup(function(){
    $(document).on("keyup", "#cs_input_treating_diseases", function() {

        var doctor_treating_disease = $(this).val();
        var doctor_treating_lenght = doctor_treating_disease.length;

        //alert(doctor_treating_disease);

        if (parseInt(doctor_treating_lenght) > 3) {
            $.get('/ajax/doctor_treating_disease.php', { "diseases_text": doctor_treating_disease }, function(ResTreatingDisease) {
                //alert(ResTreatingDisease);
                $(".cs_result_treating_diseases").show();
                $(".cs_result_treating_diseases").html(ResTreatingDisease);
            });
        } else {
            $(".cs_result_treating_diseases").html('');
        }

    });


    // SRC SEARCH CLINIC
    $(".cs_filter_src_clinic").keyup(function() {

        var filter_src_clinic = $(this).val();

        $.get('/ajax/filter_clinic.php', { "search_text": filter_src_clinic }, function(filter_search_data) {
            $("#cs_res_filter_src_clinic").html(filter_search_data);
        });

    });



    // TREATING DISEASES INPUT
    $(document).on("keyup", ".cs_treating_diseases", function() {

        var treating_diseases_val = $(this).val();

        $.get('/ajax/treating_diseases.php', { "diseases_text": treating_diseases_val }, function(diseases_data) {
            $(".cs_treating_diseases").val(diseases_data);
        });

    });


    // OTK SERACH FILTER
    $(".cs_otk_search_inp").keyup(function() {

        var otk_search_text = $(this).val();
        //var otk_search_text_length 	= otk_search_text.length;

        //if( parseInt(otk_search_text_length)>2 )
        //{

        $.get('/ajax/otk_search.php', { "search_text": otk_search_text }, function(search_data) {
            $("#cs_otk_doctor_list").html(search_data);
        });

        //}

    });


    // USER MENU TAB
    $(".cs_mobile_menu_tab").click(function() {

        var mobile_menu_tab = $(this).data('type');
		
		if( mobile_menu_tab == 'close' )
		{
			
			$(".cs_mobile_menu_tab").removeClass("cs_mobile_menu_tab_active");
			$(".cs_mobile_menu_tab_first").addClass("cs_mobile_menu_tab_active");
			
		}
		else {
			
			$(".cs_mobile_menu_tab").removeClass("cs_mobile_menu_tab_active");
			$(this).addClass("cs_mobile_menu_tab_active");
			
		}

       

        $('.cs_mobile_menu_content').hide();
		
        $('#cs_mobile_menu_body_' + mobile_menu_tab).show();

    });


    // DOCTOR ADD ANAMNEZ
    $(".cs_doctor_anamnez").click(function() {

        var anamnez_patient = $(this).data('id');
        $('#ViewPatientAnamnezModal').modal('show');

        $("#cs_patient_anamnez").val(anamnez_patient);

        $.get('/ajax/anamnez_patient.php', { "anamnez_patient": anamnez_patient }, function(anamnez_view) {
            $("#cs_patient_anamnez_data").text(anamnez_view);
        });

    });

    $(".cs_doctor_anamnez_dt").click(function() {

        var anamnez_patient = $(this).data('id');
        $('#ViewPatientAnamnezDTModal').modal('show');

        $("#cs_patient_anamnez_dt").val(anamnez_patient);

        $.get('/ajax/anamnez_patient_dt.php', { "anamnez_patient": anamnez_patient }, function(anamnez_view) {
            $("#cs_patient_anamnez_data_dt").text(anamnez_view);
        });

    });


    // DOCTOR ADD OR UPDATE ANAMNEZ BUTTON
    $("#cs_patient_anamnez_button").click(function() {

        var anamnez_text = $("#cs_patient_anamnez_data").val();
        var anamnez_patient = $("#cs_patient_anamnez").val();

        $.get('/ajax/anamnez_patient_update.php', { "anamnez_patient": anamnez_patient, "anamnez_text": anamnez_text }, function(AnamnezUpdateData) {
            $("#cs_patient_anamnez_data").text(anamnez_text);
        });

        $('#ViewPatientAnamnezModal').hide();

    });

    $("#cs_patient_anamnez_dt_button").click(function() {

        var anamnez_text = $("#cs_patient_anamnez_data_dt").val();
        var anamnez_patient = $("#cs_patient_anamnez_dt").val();

        $.get('/ajax/anamnez_patient_update_dt.php', { "anamnez_patient": anamnez_patient, "anamnez_text": anamnez_text }, function(AnamnezUpdateData) {
            $("#cs_patient_anamnez_data_dt").text(anamnez_text);

        });

        $('#ViewPatientAnamnezDTModal').remove();

    });


    // USER RESEPTERINE BAXIS
    $(".cs_view_recipes").click(function() {

        $("#viewrecipemodal_body").text('');

        var recipe_id = $(this).data('id');
        $('#ViewRecipeModal').modal('show');

        $.get('/ajax/user_recipe_view.php', { "recipe_id": recipe_id }, function(recipe_view) {
            $("#viewrecipemodal_body").html(recipe_view);
        });

    });


    // MOBILE MENU
    $(".cs_mobile_menu_btn").click(function() {

        $(".cs_mobile_menu_bg").show();
        $(".cs_mobile_menu").show();

    });


    // MOBILE DOCTOR FILTER
    $(".cs_mob_filter_button").click(function() {

        $("#cs_doctor_filter_col").removeClass('d-none d-lg-block');
        $(".cs_filter_row").show();

    });

    $(".cs_filter_close").click(function() {

        $("#cs_doctor_filter_col").addClass('d-none d-lg-block');
        $(".cs_filter_row").hide();

    });

    // MOBILE DOCTOR FILTER
    $(".cs_mob_filter_button_pro").click(function() {
        // alert('salam');
        $("#cs_doctor_filter_col").removeClass('d-none d-lg-block');
        $(".cs_filter_row_pro").show();

    });

    $(".cs_filter_close").click(function() {

        $("#cs_doctor_filter_col").addClass('d-none d-lg-block');
        $(".cs_filter_row_pro").hide();

    });


    $(".cs_filter_category_more").click(function() {

        $(".cs_filter_category_more").hide();
        $("#cs_res_filter_src_category").css({ "height": "auto" });

    });


    $(".cs_filter_clinic_more").click(function() {

        $(".cs_filter_clinic_more").hide();
        $("#cs_res_filter_src_clinic").css({ "height": "auto" });

    });
	
	
	$(".cs_review_icon").click(function() {

        $(".cs_review_icon").hide();
        $(".cs_review_text").css({ "height": "auto" });

    });

    // MOBILE MENU CLOSE
    $(".cs_mobile_menu_bg").click(function() {

        $(".cs_mobile_menu_bg").hide();
        $(".cs_mobile_menu").hide();
		$('#cs_mobile_menu_body_menu').show();

    });
	
	
	$(".cs_close_mobile_menu").click(function() {

        $(".cs_mobile_menu_bg").hide();
        $(".cs_mobile_menu").hide();
		$('#cs_mobile_menu_body_menu').show();

    });


    // USER MOBILE PROFILE MENU
    $(".cs_mobile_profile_menu").change(function() {

        var profile_menu = $(this).val();
        window.location = "/" + profile_menu;

    });


    // DOC FILTER CATEGORY
    //$(".cs_filter_category").change(function(){
    $(document).on("change", ".cs_filter_category", function() {

        var category_id = $(this).data('id');
        var category_slug = $(this).data('slug');
        var category_lang = $(this).data('lang');
        //window.location = "/" + category_lang + "/hekimler/" + category_slug;
		window.location = "/" + category_slug;

    });


    // DOC FILTER CLİNİC
    $(document).on("change", ".cs_filter_clinic", function() {

        var clinic_id = $(this).data('id');
        window.location = "/doctor_list?clinic=" + clinic_id;

    });



    // OTK QEBUL TARIXI - LAST
    $(document).on("change", "#doctor_schedule_date", function() {

        var schedule_date = $(this).val();
        var schedule_doctor = $(this).data('doctor');

        $('#doctor_schedule_button').attr('data-date', schedule_date);

        $.get('/ajax/otk_doctor_schedule_time.php', { "schedule_date": schedule_date, "schedule_doctor": schedule_doctor }, function(DoctorScheduleTime) {
            $("#doctor_schedule_time").html(DoctorScheduleTime);
        });


    });


    // OTK QEBUL SAATI - LAST
    $(document).on("change", "#doctor_schedule_time", function() {

        var schedule_time = $(this).val();
        $('#doctor_schedule_button').attr('data-time', schedule_time);

    });


    // USER ANALİZ BAXIS
    $(".cs_view_analyses").click(function() {

        var analyse_id = $(this).data('id');
        $('#ViewanalyseModal').modal('show');

        $.get('/ajax/user_analyse_view.php', { "analyse_id": analyse_id }, function(analyse_view) {
            $("#viewanalysemodal_body").html(analyse_view);
        });

    });



    // UOTK CLOSE
    $(".cs_otk_close").click(function() {

        $(".cs_otk_right_col_form").hide();
        $(".cs_modal_bg").hide();

    });



    // DOCTOR FAVORITE BUTTON
    $(".cs_doctor_favorite_mobile").click(function() {

        var doctor_id = $(this).data('id');

        $.get('/ajax/doctor_favorite.php', { "doctor_id": doctor_id }, function(doctor_favorite) {

            if (doctor_favorite == 'no auth') {
                window.location.href = "/login";
            } else if (doctor_favorite == 'add') {
                $("#cs_doctor_favorite_row_mob").html('<i class="fa fa-heart" aria-hidden="true"></i> Həkimi yaddaşdan sil');
            } else {
                $("#cs_doctor_favorite_row_mob").html('<i class="fa fa-heart-o" aria-hidden="true"></i> Həkimi yadda saxla');
            }

        });

    });


    // DOCTOR FAVORITE BUTTON
    $(".cs_doctor_favorite").click(function() {

        var doctor_id = $(this).data('id');

        $.get('/ajax/doctor_favorite.php', { "doctor_id": doctor_id }, function(doctor_favorite) {

            if (doctor_favorite == 'no auth') {
                window.location.href = "/login";
            } else if (doctor_favorite == 'add') {
                $("#cs_doctor_favorite_row").html('<i class="fa fa-heart" aria-hidden="true"></i>');
            } else {
                $("#cs_doctor_favorite_row").html('<i class="fa fa-heart-o" aria-hidden="true"></i>');
            }

        });

    });


    $(".cs_dc_tab_li").click(function() {

        var dc_tab = $(this).data('id');

        $(".cs_dc_tab_pan").hide();
        $("#cs_dc_tab_pan_" + dc_tab).show();
        $(".cs_dc_tab_li").removeClass('cs_dc_tab_active');
        $(".cs_dc_tab_" + dc_tab).addClass('cs_dc_tab_active');

    });



    // SAYTDA HEADER SEARCH
    //$(".cs_header_search_inp, .cs_main_search_inp").keyup(function() {
	$(document).on("keyup", ".cs_header_search_inp, .cs_main_search_inp", function () {

        var search_text = $(this).val();
        var search_source = $(this).data('source');
        var search_text_lenght = search_text.length;
        var search_pan_name = '';

        if( parseInt(search_text_lenght) > 0 )
		{

            if (search_source == 'header') 
			{
                search_pan_name = '.cs_header_search_result';
            } 
			else if (search_source == 'mobile') 
			{
                search_pan_name = '.cs_mobile_search_result';
            } 
			else {
                search_pan_name = '.cs_main_search_result';
            }
			

            $(search_pan_name).show();
            $(search_pan_name).html('gözləyin...');

            $.get('/ajax/ajax_search.php', { "search_text": search_text }, function(search_data) {
                $(search_pan_name).html(search_data);
            });

        } 
		else {
			
			if( $( document ).width() > 700 )
			{
				$(".cs_header_search_result").hide();
				$(".cs_main_search_result").hide();
			}
           
			

        }

    });


    $(document).on("click", ".cs_src_row_button", function() {

        var search_data_id = $(this).data('id');
        var search_data_type = $(this).data('type');
        var search_data_slug = $(this).data('slug');
        var search_data_lang = $(this).data('lang');

        if (search_data_type == 'clinic') {
            window.location.href = "/clinic/" + search_data_lang + "/" + parseInt(search_data_id) + "/";
        } else if (search_data_type == 'category') {
            //window.location.href = "/doctor_list/az/" + parseInt(search_data_id);
            window.location.href = "/" + search_data_lang + "/hekimler/" + search_data_slug;
        } else {
            //window.location.href = "/doctor/az/" + parseInt(search_data_id) + "/";
            window.location.href = "/" + search_data_lang + "/hekim/" + search_data_slug + "/";
        }


    });

    //$(".cs_otk_li").click(function(){
    $(document).on("click", ".cs_otk_li", function() {

        $("#otk_doctor_schedule").html('yüklənir...');

        $(".cs_otk_right_col").hide();
        $(".cs_otk_right_col_form").show();
        $(".cs_modal_bg").show();

        var windows_width = $(window).width();

        if (parseInt(windows_width) < 800) {
            $(window).scrollTop(0);
        }

        var otk_doctor_id = $(this).data('id');
        var otk_doctor_name = $(this).data('name');
        var otk_doctor_category = $(this).data('category');
        var otk_doctor_slug = $(this).data('slug');
        var otk_doctor_lang = $(this).data('lang');

        var doc_otk_link = "/" + otk_doctor_lang + "/hekim/" + otk_doctor_slug + "/";

        $("#cs_otk_doctor_id").val(otk_doctor_id);
        $("#cs_otk_doctor_name").text(otk_doctor_name);
        $("#cs_otk_doctor_category").text(otk_doctor_category);
        //$("#cs_otk_doctor_link").attr("href", "/doctor/az/" + otk_doctor_id);
        $("#cs_otk_doctor_link").attr("href", doc_otk_link);

        $.get('/ajax/otk_doctor_schedule.php', { "otk_doctor_id": otk_doctor_id }, function(DoctorSchedule) {
            $("#otk_doctor_schedule").html(DoctorSchedule);
        });

    });


    $(document).on("click", "#doctor_schedule_button", function() {

        var doctor_schedule_date = $(this).data('date');
        var doctor_schedule_time = $(this).data('time');

        var inp_schedule_date = $("#doctor_schedule_date").val();
        var inp_schedule_time = $("#doctor_schedule_time").val();

        if (inp_schedule_date.length > 0 && inp_schedule_time.length > 0) {

            $("#doctor_schedule_date").removeClass('is-invalid');
            $("#doctor_schedule_time").removeClass('is-invalid');

            $("#cs_otk_cons_date").val(doctor_schedule_date);
            $("#cs_otk_cons_time").val(doctor_schedule_time);

            //.show();
            $("#DoctorScheduleModal").modal('show');

        } else {
            $("#doctor_schedule_date").addClass('is-invalid');
            $("#doctor_schedule_time").addClass('is-invalid');
        }

    });


    $(".cs_services_button").click(function() {

        $(".cs_services_row").css("height", "auto");
        $(".cs_services_button_row").hide();

    });


    $(".cs_consulting_type").click(function() {

        var consulting_type = $(this).data('type');
        var consulting_color = $(this).data('color');
        $("#cs_otk_cons_type").val(consulting_type);

        $(".cs_consulting_type_whatsapp").css({ "background-color": "#fff", "color": "#1EBEA5" });
        $(".cs_consulting_type_telegram").css({ "background-color": "#fff", "color": "#0984C5" });
        $(".cs_consulting_type_skype").css({ "background-color": "#fff", "color": "#11A9F4" });
        $(".cs_consulting_type_other").css({ "background-color": "#fff", "color": "#681A5E" });

        $(".cs_consulting_type_" + consulting_type).css({ "background-color": consulting_color, "color": "#fff" });


    });

	
    $('.phone_format').usPhoneFormat({
        format: '(xxx) xxx-xxxx',
    });
	


    $(".rs_question_answer").click(function() {
        var question = $(this).data('question');
        var question_id = $(this).data('id');
        // alert(question)
        $('#rs_question_ans').html(question);
        $('#rs_question_answer_value').val(question_id);
    });
	
	
	$(".cs_shipping_status").change(function() {

        var shipping_status_id = $(this).val();
		
		// kuryer-1
		// ozum - 3
		
		if( shipping_status_id == 1 )
		{
			$("#cs_shipping_status_text").show();
			$("#cs_shipping_status_text").text('Məsafədən asılı olaraq çatdırılma qiyməti dəyişir. Operatorla əlaqə saxlayın.');
		}
		else {
			$("#cs_shipping_status_text").hide();
		}
		
    });



	$(".cs_change_basket_quantity").click(function() {
		
		//alert('test');
		
        var basket_id 			= $(this).data('id');
		var basket_token		= $(this).data('token');
		var basket_quantity 	= $(this).data('quantity');
        var basket_type 		= $(this).data('type');
		
		$.get('/ajax/change_basket_quantity.php', { "basket_id": basket_id, "basket_token": basket_token, "basket_quantity": basket_quantity, "basket_type": basket_type }, function(quantity_data) {
			location.reload();
		});

    });

});
$(document).ready(function(){
	
	if( $( document ).width() > 700 )
	{
		$(document).mouseup(function(){
			$(".cs_main_search_result").hide();
			$(".cs_header_search_result").hide();
		});
	}

});